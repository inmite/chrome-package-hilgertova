/*
 * Copyright 2014 Inmite s.r.o. (www.inmite.eu).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var hostname = window.location.hostname;
if (hostname == "github.com") {

	var clicked = false;

	var clickPackages = function () {
		if (!clicked) {
			var nodeList = document.querySelectorAll(".js-directory-link");
			if (nodeList.length == 1) {
				window.location.href = nodeList[0].getAttribute("href");
				clicked = true;
			}
		}
    }
    clickPackages();
 
 	var container = document.getElementById("js-repo-pjax-container");
 	if (container) {
 		container.addEventListener( "DOMSubtreeModified", clickPackages, true);
 	}
} else if (hostname == "bitbucket.org") {

	var clicked = false;

	var clickPackages = function () {
		if (!clicked) {
			var fileList = document.querySelectorAll(".filename");
			if (fileList.length == 0) {
				var nodeList = document.querySelectorAll(".dirname");
				if (nodeList.length == 2) {
					var up = nodeList[0].querySelectorAll(".aui-iconfont-devtools-browse-up");
					if (up.length==1) {
						var a = nodeList[1].querySelectorAll(".pjax-trigger");
						if (a.length==1) {
							window.location.href = a[0].getAttribute("href");
							clicked = true;
						}
					}
				
				}
			}
		}
    }
    clickPackages();

    var container = document.getElementById("repo-content");
 	if (container) {
 		container.addEventListener( "DOMSubtreeModified", clickPackages, true);
 	} 	
} else if (document.getElementById("cgit") != null) { // cgit
	var fileList = document.querySelectorAll(".ls-blob");
	var dirList = document.querySelectorAll(".ls-dir");
	if (dirList.length == 1 && fileList.length == 0) {
		window.location.href = dirList[0].getAttribute("href");
	}
}