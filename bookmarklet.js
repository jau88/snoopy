javascript:(function()%7Bvar%20d%3Ddocument%2Cs%2Ce%3Bvar%20el%3Dd.getElementById(%22snpy%22)%3Bif(typeof%20Snoopy!%3D%22undefined%22)%7BSnoopy.toggle()%3Breturn%7Delse%7Bif(el)%7Bel.className%3D%2Fclosed%2F.test(el.className)%3Fel.className.replace(%22closed%22%2C%22%22)%3Ael.className%2B%22%20closed%22%3Breturn%7D%7Ds%3Dd.createElement(%22link%22)%3Bs.setAttribute(%22href%22%2C%22https%3A%2F%2Fcdn.rawgit.com%2Fmichaelnordmeyer%2Fsnoopy%2Fmaster%2Fsnoopy-min.css%22)%3Bs.setAttribute(%22rel%22%2C%22stylesheet%22)%3Bs.setAttribute(%22type%22%2C%22text%2Fcss%22)%3Bd.getElementsByTagName(%22head%22)%5B0%5D.appendChild(s)%3Be%3Dd.createElement(%22script%22)%3Be.setAttribute(%22src%22%2C%22https%3A%2F%2Fcdn.rawgit.com%2Fmichaelnordmeyer%2Fsnoopy%2Fmaster%2Fsnoopy-min.js%22)%3Bd.getElementsByTagName(%22body%22)%5B0%5D.appendChild(e)%7D)()%3B