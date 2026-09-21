$(document).ready(function () {

    // メニュー: hover中だけ、その項目が強調された画像に差し替える
    var menuImage = $("#link_image");
    var orgImg = menuImage.attr("src");
    $("#menu a").hover(
        function () { menuImage.attr("src", $(this).attr("data-hover")); },
        function () { menuImage.attr("src", orgImg); }
    );

    // ページ切り替え: #works などのハッシュに対応するページだけ表示する
    function showPage() {
        // idを "page-xxx" にしているのは、ハッシュ移動でブラウザがスクロールしないようにするため
        var page = $("#page-" + location.hash.replace(/\W/g, ""));
        if (!page.length) page = $("#page-works");
        $(".page").hide();
        page.show();
    }
    $(window).bind("hashchange", showPage);
    showPage();

    $(".yoxview").yoxview({ cacheBuffer: 0 });
});
