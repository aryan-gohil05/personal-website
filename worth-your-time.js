const BOOKS = [
    {
        title: "The Millionaire Fastlane",
        author: "M.J. DeMarco",
        cover: "/images/fastlane_cover.jpg",
        review: "Changed how I think about wealth, time, and the systems we're sold by default. Blunt, occasionally abrasive, and genuinely useful if you're willing to question the standard playbook.",
        buyUrl: "https://www.amazon.co.uk/Millionaire-Fastlane-Crack-Wealth-Lifetime/dp/0984358102"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        cover: "/images/books/atomic-habits.jpg",
        review: "The best practical guide to building habits that actually stick. Dense with frameworks you'll use immediately.",
        buyUrl: "https://www.amazon.co.uk/Atomic-Habits-Proven-Build-Break/dp/1847941834"
    },
    {
        title: "Deep Work",
        author: "Cal Newport",
        cover: "/images/books/deep-work.jpg",
        review: "A convincing argument for why distraction is eroding your output — and what to do about it.",
        buyUrl: "https://www.amazon.co.uk/Deep-Work-Focused-Success-Distracted/dp/0349411905"
    },
    {
        title: "Zero to One",
        author: "Peter Thiel",
        cover: "/images/books/zero-to-one.jpg",
        review: "Short and contrarian. Forces you to ask whether you're building something new or just copying what already exists.",
        buyUrl: "https://www.amazon.co.uk/Zero-One-Notes-Startups-Future/dp/0753555190"
    }
];

let savedScrollY = 0;

function renderBooks() {
    const coverGrid = document.getElementById('books-cover-grid');
    const cardGrid = document.getElementById('books-card-grid');

    BOOKS.forEach(function(book, i) {
        const coverItem = document.createElement('div');
        coverItem.className = 'wyt-cover-item';
        const coverImg = document.createElement('img');
        coverImg.src = book.cover;
        coverImg.alt = book.title;
        coverImg.className = 'wyt-cover-img';
        const coverFallback = document.createElement('div');
        coverFallback.className = 'wyt-cover-fallback';
        coverFallback.style.display = 'none';
        coverFallback.textContent = book.title;
        coverImg.onerror = function() {
            coverImg.style.display = 'none';
            coverFallback.style.display = 'flex';
        };
        coverItem.appendChild(coverImg);
        coverItem.appendChild(coverFallback);
        coverItem.addEventListener('click', function() { openDetail(i); });
        coverGrid.appendChild(coverItem);

        const card = document.createElement('a');
        card.className = 'wyt-card';
        card.href = book.buyUrl;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        const cardImg = document.createElement('img');
        cardImg.src = book.cover;
        cardImg.alt = book.title;
        cardImg.className = 'wyt-card-cover';
        const cardFallback = document.createElement('div');
        cardFallback.className = 'wyt-card-cover-fallback';
        cardFallback.style.display = 'none';
        cardFallback.textContent = book.title;
        cardImg.onerror = function() {
            cardImg.style.display = 'none';
            cardFallback.style.display = 'flex';
        };
        const cardTitle = document.createElement('div');
        cardTitle.className = 'wyt-card-title';
        cardTitle.textContent = book.title;
        const cardAuthor = document.createElement('div');
        cardAuthor.className = 'wyt-card-author';
        cardAuthor.textContent = book.author;
        const overlay = document.createElement('div');
        overlay.className = 'wyt-card-overlay';
        const overlayTitle = document.createElement('div');
        overlayTitle.className = 'wyt-card-overlay-title';
        overlayTitle.textContent = book.title;
        const overlayAuthor = document.createElement('div');
        overlayAuthor.className = 'wyt-card-overlay-author';
        overlayAuthor.textContent = book.author;
        const overlayBtn = document.createElement('span');
        overlayBtn.className = 'wyt-card-buy-btn';
        overlayBtn.textContent = 'Go buy it →';
        overlay.appendChild(overlayTitle);
        overlay.appendChild(overlayAuthor);
        overlay.appendChild(overlayBtn);
        card.appendChild(cardImg);
        card.appendChild(cardFallback);
        card.appendChild(cardTitle);
        card.appendChild(cardAuthor);
        card.appendChild(overlay);
        cardGrid.appendChild(card);
    });
}

function openDetail(index) {
    var book = BOOKS[index];
    savedScrollY = window.scrollY;

    var img = document.getElementById('wyt-detail-cover-img');
    img.src = book.cover;
    img.alt = book.title;
    img.style.display = 'block';
    img.onerror = function() { img.style.display = 'none'; };

    document.getElementById('wyt-detail-title').textContent = book.title;
    document.getElementById('wyt-detail-author').textContent = book.author;
    document.getElementById('wyt-detail-review').textContent = book.review;
    document.getElementById('wyt-detail-buy').href = book.buyUrl;

    var overlay = document.getElementById('wyt-detail');
    overlay.classList.add('wyt-detail--open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeDetail() {
    if (document.activeElement && document.activeElement.closest('#wyt-detail')) {
        document.activeElement.blur();
    }
    var overlay = document.getElementById('wyt-detail');
    overlay.classList.remove('wyt-detail--open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    window.scrollTo(0, savedScrollY);
}

function setupShare() {
    var btn = document.getElementById('wyt-share-btn');
    if (!btn) return;
    btn.addEventListener('click', function() {
        var label = btn.querySelector('.wyt-share-label');
        var data = { title: document.title, url: window.location.href };
        if (navigator.share) {
            navigator.share(data).catch(function() {});
        } else {
            navigator.clipboard.writeText(data.url).then(function() {
                label.textContent = 'Copied!';
                setTimeout(function() { label.textContent = 'Share'; }, 1500);
            }).catch(function() {});
        }
    });
}

function setupSectionObserver() {
    var label = document.getElementById('wyt-section-label');
    if (!label) return;
    var sections = document.querySelectorAll('.wyt-section');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                label.textContent = entry.target.dataset.label;
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -60% 0px' });
    sections.forEach(function(s) { observer.observe(s); });
}

document.addEventListener('DOMContentLoaded', function() {
    renderBooks();
    setupShare();
    setupSectionObserver();
    var closeBtn = document.getElementById('wyt-detail-close');
    if (closeBtn) closeBtn.addEventListener('click', closeDetail);
});
