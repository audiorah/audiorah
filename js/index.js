// soundcloud api
var SC_ID = 'ba47209edc0a4c129a460a936fb4e9f2';
var TRACK_URL = 'https://soundcloud.com/audiorah/semi-chill-bollywood';

var tracks = [
{ title: 'Semi Chill Bollywood', subtitle: 'Bollywood', img: 'img/ar-summer.png', song: 'https://soundcloud.com/audiorah/semi-chill-bollywood' },
{ title: 'Jam Out Session', subtitle: 'Bollywood', img: 'img/ar-night.png', song: 'https://soundcloud.com/audiorah/jam-out-session' },
{ title: 'Mix Mix Vol. 1', subtitle: 'World', img: 'img/ar-city.png', song: 'https://soundcloud.com/audiorah/mix-mix' },
{ title: 'Reggaeton Mix', subtitle: 'Reggaeton', img: 'img/ar-beach.png', song: 'https://soundcloud.com/audiorah/reggaeton-mix' },
{ title: 'Fusion Reggae Mix', subtitle: 'Dancehall', img: 'img/ar-summer.png', song: 'https://soundcloud.com/rahnik/fusion-reggae-mix' },
{ title: 'Throwback Bolly Pop', subtitle: 'Pop', img: 'img/ar-night.png', song: 'https://soundcloud.com/audiorah/bolly-pop' },
{ title: 'Southy Mix', subtitle: 'Bollywood', img: 'img/ar-city.png', song: 'https://soundcloud.com/audiorah/southy-mix' },
{ title: 'Lounge Mini Mix', subtitle: 'House', img: 'img/ar-beach.png', song: 'https://soundcloud.com/rahnik/lounge-mini-mix' },
{ title: 'FIRE Mix (It\'s Lit)', subtitle: 'Hip Hop', img: 'img/ar-summer.png', song: 'https://soundcloud.com/rahnik/fire-mix-its-lit' },
{ title: 'Summa Mix 3', subtitle: 'House', img: 'img/ar-night.png', song: 'https://soundcloud.com/rahnik/summa-mix-3' },
{ title: 'Summa Mix 2', subtitle: 'Hip Hop & Rap', img: 'img/ar-city.png', song: 'https://soundcloud.com/rahnik/summa-mix-2' },
{ title: 'DJ NIK - GET LIT VOL 1', subtitle: 'House', img: 'img/ar-beach.png', song: 'https://soundcloud.com/itsdjnik/dj-nik-get-lit-vol-1' },
{ title: 'Summa Mix 1', subtitle: 'Hip Hop & Rap', img: 'img/ar-summer.png', song: 'https://soundcloud.com/rahnik/summa-mix-1' },
{ title: 'Summer Vibe', subtitle: 'House', img: 'img/ar-night.png', song: 'https://soundcloud.com/audiorah/summer-vibe' },
{ title: 'Teri Pee Loon Ki Baaton', subtitle: 'Bollywood', img: 'img/ar-city.png', song: 'https://soundcloud.com/audiorah/teri-pee-loon-ki-baaton' },
{ title: 'Tum Hi Ho Waves Mastered', subtitle: 'Mr Probz', img: 'img/ar-beach.png', song: 'https://soundcloud.com/audiorah/tum-hi-ho-waves-mastered' }];


var swatch = document.querySelector('.swatch');
var swatchImg = document.querySelector('.swatch__hero');
var swatchContent = document.querySelector('.swatch__content');
var swatchTitle = document.querySelector('.swatch__title');
var swatchText = document.querySelector('.swatch__text');

for (var i = 0; i < tracks.length; i++) {
	var track = document.createElement('div');
	track.classList = 'track';
	track.setAttribute('data-track', tracks[i].song);
	track.innerHTML = '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<svg data-track="' +
	tracks[i].img + '" class="track__img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path><polyline points="9 17 9 5 21 3 21 15"></polyline></svg>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="track__content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div data-track="' +

	tracks[i].title + '" class="track__artist">' + tracks[i].title + '</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div data-track="' +
	tracks[i].subtitle + '" class="track__name">' + tracks[i].subtitle + '</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>';


	track.addEventListener('click', function () {
		$('.swatch').removeClass('is-playing');
		var trackLink = this.getAttribute('data-track');
		var trackImg = this.querySelector('.track__img').getAttribute('data-track');
		var trackArtist = this.querySelector('.track__artist').getAttribute('data-track');
		var trackName = this.querySelector('.track__name').getAttribute('data-track');
		this.classList.add('is-active');
		var trackItem = document.querySelectorAll('.track');
		for (var i = 0; i < trackItem.length; i++) {
			trackItem[i].classList.remove('is-active');
		}
		this.classList.add('is-active');
		loader();
		audioElement.src = '';
		setTimeout(function () {
			document.querySelector('.loader').remove();
			swatch.classList.remove('swatch--loading');
			swatchImg.setAttribute('src', trackImg);
			swatchTitle.innerHTML = trackArtist;
			swatchText.innerHTML = trackName;
			$('#play-btn').addClass('pause');
			getTrack(trackLink);
		}, 3000);
	});

	document.getElementById('tracksContainer').appendChild(track);
}

function loader() {
	swatch.classList.add('swatch--loading');
	var loader = document.createElement('div');
	loader.classList = 'loader';
	loader.innerHTML = '<svg class="loader__circular" viewBox="25 25 50 50"><circle class="loader__path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle></svg>';
	swatch.appendChild(loader);
}

SC.initialize({
	client_id: SC_ID });


// audio
var audioInput = document.getElementById('audioInput');
audioInput.addEventListener('input', function () {
	audioInput.value && audioInput.value.indexOf('http') == 0 && getTrack(audioInput.value);
});

var audioElement = document.getElementById('player');
var sc = document.getElementById('soundcloud');
var scLink = document.getElementById('sc_link');

window.addEventListener('keyup', function (e) {
	if (e.keyCode === 88) {
		sc.style.display = (scVisible = !scVisible) ? 'block' : 'none';
	}
});

function getTrack(url) {
	audioInput.value = TRACK_URL;
	SC.get('/resolve', { url: url }).then(function (data) {
		console.log('success?', data);

		if (typeof data.errors === 'undefined') {
			if (data.streamable) {
				audioElement.src = data.stream_url + '?client_id=' + SC_ID;
        scLink.href = data.permalink_url;
				$('.swatch').addClass('is-playing');
			} else
			{
				alert('This SoundCloud URL is not allowed to be streamed.');
			}
		} else
		{
			alert('SoundCloud error :(');
		}
	});
}

getTrack(TRACK_URL);

//player
function initProgressBar() {
	var player = document.getElementById('player');
	var length = player.duration;
	var current_time = player.currentTime;

	// calculate total length of value
	var totalLength = calculateTotalValue(length);
	document.getElementById("end-time").innerHTML = totalLength;

	// calculate current value time
	var currentTime = calculateCurrentValue(current_time);
	document.getElementById("start-time").innerHTML = currentTime;
	if ($('.swatch').hasClass('is-playing')) {
		var progressbar = document.getElementById('seek-obj');
		progressbar.value = player.currentTime / player.duration;
		progressbar.addEventListener("click", seek);
	}

	/*if (player.currentTime == player.duration) {
     document.getElementById('play-btn').className = "";
   }*/

	function seek(event) {
		var percent = event.offsetX / this.offsetWidth;
		player.currentTime = percent * player.duration;
		progressbar.value = percent / 100;
	}
};

function initPlayers(num) {
	// pass num in if there are multiple audio players e.g 'player' + i

	for (var i = 0; i < num; i++) {
		(function () {

			// Variables
			// ----------------------------------------------------------
			// audio embed object
			var playerContainer = document.getElementById('player-container'),
			player = document.getElementById('player'),
			isPlaying = false,
			playBtn = document.getElementById('play-btn');

			// Controls Listeners
			// ----------------------------------------------------------
			if (playBtn != null) {
				playBtn.addEventListener('click', function () {
					togglePlay();
				});
			}

			// Controls & Sounds Methods
			// ----------------------------------------------------------
			function togglePlay() {
				if ($('#play-btn').hasClass('pause')) {
					player.pause();
					//isPlaying = false;
					document.getElementById('play-btn').className = "";
					console.log('paused');

				} else {
					player.play();
					document.getElementById('play-btn').className = "pause";
					//isPlaying = true;
					console.log('pressed play');
				}
			}
		})();
	}
}

function calculateTotalValue(length) {
	var minutes = Math.floor(length / 60),
	seconds_int = length - minutes * 60,
	seconds_str = seconds_int.toString(),
	seconds = seconds_str.substr(0, 2),
	time = minutes + ':' + seconds;

	return time;
}

function calculateCurrentValue(currentTime) {
	var current_hour = parseInt(currentTime / 3600) % 24,
	current_minute = parseInt(currentTime / 60) % 60,
	current_seconds_long = currentTime % 60,
	current_seconds = current_seconds_long.toFixed(),
	current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

	return current_time;
}

initPlayers(jQuery('#player-container').length);

document.querySelector('.logo').addEventListener('click', function () {
	document.getElementById('about').setAttribute('open', '');
});
