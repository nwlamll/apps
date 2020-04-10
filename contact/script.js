function toggleMenu(){
	let width = document.body.clientWidth;
	if (width < 768) {
		let menu = document.querySelector("nav");
		menu.classList.toggle("active");
	}
}

const AppsInformations = [
	{
		id: "sd",
		title: "SECRET DIARY",
		description: "Write daily diaries and add text, photos and voice memo to your entry. The app also have a mood tracker with monthly chart statistics, task planner and event reminder.",
		technologies: "Swift, CocoaTouch, CoreData, Cloudkit, In-App Purchases, Push Notifications, LocalAuthentication, Programmatic UI",
		secreenshots: [
			"https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/89/0c/c2/890cc2cb-2621-1a09-e53f-c3cd1ffe76b5/pr_source.png/462x1000bb.png",
			"https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/0a/16/eb/0a16eba3-ab3e-b209-648d-1e88936603ef/pr_source.png/462x1000bb.png",
			"https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/2f/b0/80/2fb08066-7b4d-1604-13f9-bb6c93c4f7f2/pr_source.png/462x1000bb.png",
			"https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/f6/55/1b/f6551b60-0c74-b442-588d-03fce397cc33/pr_source.png/462x1000bb.png"
		],
		link: "https://sensortower.com/ios/US/khalid-mgaad/app/my-secret-diary-mood-tracker/1385274865/overview"
	},

	{
		id: "ws",
		title: "WATERMARK STUDIO",
		description: "Ready to use templates for logo and watermark design, choose your prefered template, customize it and add it to your photos and videos with possibilites add animations for video watermark and save user designs for later use.",
		technologies: "Swift, CocoaTouch, In-App Purchases, UIKit, PhotoKit, AVFoundation",
		secreenshots: [
			"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/60/e7/d2/60e7d256-311c-d072-dbf0-95425257706f/pr_source.jpg/462x1000bb.png",
			"https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/30/11/5d/30115dc9-c836-59ad-fd73-69445d475800/pr_source.jpg/462x1000bb.png",
			"https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/32/f0/9a/32f09a09-e2af-7ffc-4b7b-4531548d5b47/pr_source.jpg/462x1000bb.png",
			""
		],
		link: "https://sensortower.com/ios/br/khalid-mgaad/app/watermark-studio-video-photo/1449593969/overview"
	},

	{
		id: "cc",
		title: "Currency Converter",
		description: "Simple and easy to use international foreign currency converter app.",
		technologies: "Swift, In-App Purchases, UIKit, REST API",
		secreenshots: [
			"https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/72/6b/3f/726b3f44-f512-ddb1-a3ba-62349398d645/pr_source.jpg/462x1000bb.png",
			"https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/a3/b2/79/a3b279ac-2941-ae2d-1772-993c2bc43474/pr_source.jpg/462x1000bb.png",
			"",
			""
		],
		link: "https://sensortower.com/ios/sa/khalid-mgaad/app/thwyl-l-mlt-s-r-mbshr/1164121783/overview"
	},

	{
		id: "sb",
		title: "SafeBox - Photo & Video Hider",
		description: "Import photos and videos from phone library and hide them in the app. Requires passcode or fingerprint to access saved medias.",
		technologies: "Swift, CoreData, CloudKit, In-App Purchases, UIKit, PhotoKit, AVFoundation, LocalAuthentication",
		secreenshots: [
			"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/cf/4e/d0/cf4ed0d5-514b-9a4e-729f-717d1c159e5f/pr_source.jpg/392x696bb.jpg",
			"https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/85/e8/7e/85e87e71-a0f2-c04d-13d1-0e967bc7774c/pr_source.jpg/392x696bb.jpg",
			"https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/d2/ff/4a/d2ff4aac-8892-3d18-3dfb-343c77e401fc/pr_source.jpg/392x696bb.jpg",
			""
		],
		link: "https://sensortower.com/ios/fr/khalid-mgaad/app/album-photo-prive-safebox/1406431670/overview"
	},
]

function iconTapped(sender) {

	var arrow = document.querySelector(".arrow-pointer");
	
	var titleHolder = document.querySelector(".app-title");
	var desHolder = document.querySelector(".app-description");
	var techHolder = document.querySelector(".app-technologies");
	var screenshotholders = document.querySelectorAll(".screenshot");
	var moredetails = document.querySelector(".app-more-details");

	for (let i = 0;i<AppsInformations.length;i++) {
		if (AppsInformations[i].id == sender.id) {
			var selectedApp = AppsInformations[i];
			titleHolder.innerHTML = selectedApp.title;
			desHolder.innerHTML = selectedApp.description;
			techHolder.innerHTML = selectedApp.technologies;
			moredetails.href = selectedApp.link;

			for (let j = 0;j<4;j++){
				screenshotholders[j].src = selectedApp.secreenshots[j];
			}
		}
	}

	console.log("TAPPED APP "+sender.id);
	arrow.style.position = "relative";
	arrow.style.left = sender.getBoundingClientRect().left+"px";
}


function CheckValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendMessage(sender){
	//https://formspree.io/xgeylgle

	disableSend = () => {
		sender.value = "Sending..."
		sender.disabled = true;
	}

	enableSend = () => {
		sender.value = "Send"
		sender.disabled = false;
	}

	disableSend();
	
	var emailHolder = document.querySelector("form input[name='_replyto']");
	var subjectHolder = document.querySelector("form input[name='subject']");
	var messageHolder = document.querySelector("form textarea");

	const mail = emailHolder.value;
	const subject = subjectHolder.value;
	const message = messageHolder.value;

	if (!CheckValidEmail(mail)){
		popupMessage("Enter a valid email","your email address seems to be invalid.");
		enableSend();
		return
	}

	if (subject==""){
		popupMessage("Subject missing.","Please fill out subject field.");
		enableSend();
		return
	}

	if (message==""){
		messageHolder.style.border = "1px solid red";
		popupMessage("No Message","Please fill out message field.");
		enableSend();
		return
	}

	fetch("https://formspree.io/xgeylgle", {
		
		method:"POST",

		body: JSON.stringify({ 
        _replyto: mail, 
        subject: subject, 
        message: message
    	}), 

	    headers: { 
	        "Content-type": "application/json; charset=UTF-8"
	    }

	})
	.then(response => {response.json(); console.log("RESPONCE "+response)})
	.then(json => {
		// emailHolder.value = "";
		// subjectHolder.value = "";
		// messageHolder.value = "";
		var form = document.querySelector("footer form");
		form.style.display = "none";
		console.log("RESPOCE > > > "+json)
		var successMessage = document.querySelector("footer .responce");
		successMessage.style.height = "150px";
		successMessage.style.opacity = "1"
	});

}


function popupMessage(title,message){
	// transform: translateY(-100%);
	// opacity: 0;
	var messageView = document.querySelector(".popup-message");
	var titleHolder = document.querySelector(".popup-message .message-title");
	var messageHolder = document.querySelector(".popup-message .message-body");

	titleHolder.innerHTML = title;
	messageHolder.innerHTML = message;

	messageView.style.transform = "translateY(0)";
	messageView.style.opacity = "1";

	setTimeout(() => {
		console.log("TIME OUT");
		messageView.style.transform = "translateY(-100%)";
		messageView.style.opacity = "0";
	}, 3000);
}














