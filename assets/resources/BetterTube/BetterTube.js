function replaceThumbnailWithIframe(e){var t=(e=e||window.event).target||e.srcElement;t.className.match(/BetterTube-playBtn/)&&(parent=t.parentNode,id=parent.getAttribute("data-youtube-id"),style='style="frameborder=0;"',inner='<iframe class="youtubePlayer" src="https://www.youtube.com/embed/'+id+'?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"'+style+" />",parent.innerHTML=inner)}document.body.addEventListener?document.body.addEventListener("click",replaceThumbnailWithIframe,!1):document.body.attachEvent("onclick",replaceThumbnailWithIframe);