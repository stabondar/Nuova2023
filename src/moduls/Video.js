export default class Video {

  constructor() {

    const video = () => {
      let vidoSection = $('.main-hero__video')
      let btn = vidoSection.find('.main-hero__play')

      // let backgroundVid = vidoSection.find(".embed-video");

      vidoSection.on("click", function () {
          let myVideo = $(this).find("video");
          $(this).toggleClass("playing");
          if ($(this).hasClass("playing")) {
              myVideo.prop("muted", false);
              myVideo.prop("currentTime", 0);
              btn.addClass("pause");
          } else {
              myVideo.prop("muted", true);
              btn.removeClass("pause");
          }
      });
    }
    video()

  }
}