document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // 1. スマホ用ハンバーガーメニューの開閉処理
    // ==========================================
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');
    const navLinks = document.querySelectorAll('.l-header__link, .c-button--header');

    if (hamburger && nav) {
        // ハンバーガーボタンをクリックした時
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
            document.body.classList.toggle('is-no-scroll'); // 背景がスクロールするのを防ぐ
        });

        // メニューの中のリンクをクリックした時にメニューを閉じる
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('is-active');
                nav.classList.remove('is-active');
                document.body.classList.remove('is-no-scroll');
            });
        });
    }

    // ==========================================
    // 2. スクロールに合わせたフェードイン（ふわっと表示）
    // ==========================================
    const fadeElements = document.querySelectorAll('.js-fade');

    // 要素が画面に入ったかどうかを監視する仕組み
    const fadeObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            // 要素が画面に入ったら 'is-show' クラスを追加
            if (entry.isIntersecting) {
                entry.target.classList.add('is-show');
                observer.unobserve(entry.target); // 1回表示されたら監視を終了する
            }
        });
    }, {
        rootMargin: '0px 0px -50px 0px' // 画面の下から50px入ったタイミングで発火させる
    });

    // '.js-fade' がついているすべての要素を監視対象にする
    fadeElements.forEach(function (element) {
        fadeObserver.observe(element);
    });
});