function updateSliderArrowsStatus(
    cardsContainer,
    containerWidth,
    cardCount,
    cardWidth
) {
    if (
        $(cardsContainer).scrollLeft() + containerWidth <
        cardCount * cardWidth + 20
    ) {
        $("#slide-right-container").addClass("active");
    } else {
        $("#slide-right-container").removeClass("active");
    }
    if ($(cardsContainer).scrollLeft() > 0) {
        $("#slide-left-container").addClass("active");
    } else {
        $("#slide-left-container").removeClass("active");
    }
}
$(function () {
    // Scroll slider left/right
    let div = $("#cards-container");
    let cardCount = $(div).find(".cards").children(".card").length;
    let speed = 550;
    let containerWidth = $("#top-articles-horizontal-cards-1").width();
    let cardWidth = 600;

    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

    //Remove scrollbars
    $("#slide-right-container").click(function (e) {
        if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
            $(div).animate(
                {
                    scrollLeft: $(div).scrollLeft() + cardWidth * 3,
                },
                {
                    duration: speed,
                    complete: function () {
                        setTimeout(
                            updateSliderArrowsStatus(
                                div,
                                containerWidth,
                                cardCount,
                                cardWidth
                            ),
                            2005
                        );
                    },
                }
            );
        }
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    });
    $("#slide-left-container").click(function (e) {
        if ($(div).scrollLeft() + containerWidth > containerWidth) {
            $(div).animate(
                {
                    scrollLeft: "-=" + cardWidth * 3,
                },
                {
                    duration: speed,
                    complete: function () {
                        setTimeout(
                            updateSliderArrowsStatus(
                                div,
                                containerWidth,
                                cardCount,
                                cardWidth
                            ),
                            2005
                        );
                    },
                }
            );
        }
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    });

    // If resize action ocurred then update the container width value
    $(window).resize(function () {
        try {
            containerWidth = $("#cards-container").width();
            updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
        } catch (error) {
            console.log(
                `Error occured while trying to get updated slider container width:
              ${error}`
            );
        }
    });
});
