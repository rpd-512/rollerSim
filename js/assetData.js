var rollerBasic = `<svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" >
<rect x="109.926" y="11" width="30" height="225" rx="15" fill="$COLOR$"/>
<rect x="12.0002" y="138.074" width="30" height="225" rx="15" transform="rotate(-90 12.0002 138.074)" fill="$COLOR$"/>
<rect x="109.926" y="11" width="30" height="225" rx="15" fill="black" fill-opacity="0.25"/>
<rect x="12" y="138.074" width="30" height="225" rx="15" transform="rotate(-90 12 138.074)" fill="black" fill-opacity="0.25"/>
<circle cx="125" cy="124.317" r="39.2857" fill="$COLOR$"/>
<path d="M250 125C250 194.036 194.036 250 125 250C55.9644 250 0 194.036 0 125C0 55.9644 55.9644 0 125 0C194.036 0 250 55.9644 250 125ZM25 125C25 180.228 69.7715 225 125 225C180.228 225 225 180.228 225 125C225 69.7715 180.228 25 125 25C69.7715 25 25 69.7715 25 125Z" fill="$COLOR$"/>
</svg>
`;

var rollerSpring = `<svg width="251" height="250" viewBox="0 0 251 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M226.829 55.7503C223.317 49.6658 218.64 44.3329 213.066 40.0559C207.492 35.7789 201.13 32.6416 194.344 30.8233C187.558 29.0049 180.479 28.541 173.514 29.458C166.548 30.375 159.831 32.6551 153.747 36.1679C147.663 39.6808 142.33 44.3577 138.053 49.9316C133.776 55.5054 130.638 61.8671 128.82 68.6535C127.002 75.4398 126.538 82.5178 127.455 89.4834C128.372 96.449 130.652 103.166 134.165 109.25L152.698 98.5503C150.59 94.8996 149.222 90.8695 148.672 86.6902C148.121 82.5108 148.4 78.264 149.491 74.1922C150.582 70.1204 152.464 66.3034 155.03 62.959C157.597 59.6147 160.796 56.8086 164.447 54.7009C168.098 52.5932 172.128 51.2251 176.307 50.6749C180.487 50.1247 184.733 50.403 188.805 51.4941C192.877 52.5851 196.694 54.4674 200.038 57.0336C203.383 59.5998 206.189 62.7996 208.296 66.4503L226.829 55.7503Z" fill="$COLOR$"/>
<path d="M26.2317 194C29.7774 200.142 34.498 205.524 40.124 209.841C45.75 214.158 52.1711 217.325 59.0209 219.16C65.8706 220.996 73.0148 221.464 80.0455 220.538C87.0762 219.613 93.8558 217.311 99.9971 213.766C106.138 210.22 111.521 205.499 115.838 199.873C120.155 194.247 123.322 187.826 125.157 180.976C126.992 174.127 127.461 166.983 126.535 159.952C125.609 152.921 123.308 146.142 119.762 140L101.056 150.8C103.184 154.485 104.565 158.553 105.12 162.771C105.675 166.99 105.394 171.276 104.293 175.386C103.192 179.496 101.292 183.349 98.7017 186.724C96.1116 190.1 92.8819 192.932 89.1971 195.059C85.5123 197.187 81.4446 198.568 77.2261 199.123C73.0077 199.678 68.7212 199.397 64.6114 198.296C60.5015 197.195 56.6488 195.295 53.2732 192.705C49.8977 190.115 47.0653 186.885 44.9379 183.2L26.2317 194Z" fill="$COLOR$"/>
<path d="M56.997 24.2349C50.8557 27.7806 45.4729 32.5012 41.156 38.1272C36.839 43.7531 33.6725 50.1743 31.8371 57.0241C30.0017 63.8738 29.5334 71.018 30.459 78.0487C31.3847 85.0794 33.686 91.859 37.2317 98.0003C40.7774 104.142 45.498 109.524 51.124 113.841C56.7499 118.158 63.1711 121.325 70.0208 123.16C76.8706 124.996 84.0148 125.464 91.0455 124.538C98.0762 123.613 104.856 121.311 110.997 117.766L100.197 99.0595C96.5123 101.187 92.4445 102.568 88.2261 103.123C84.0077 103.678 79.7212 103.397 75.6113 102.296C71.5015 101.195 67.6488 99.2951 64.2732 96.7049C60.8976 94.1147 58.0653 90.8851 55.9378 87.2003C53.8104 83.5155 52.4296 79.4478 51.8742 75.2293C51.3189 71.0109 51.5998 66.7244 52.7011 62.6145C53.8023 58.5047 55.7022 54.652 58.2924 51.2764C60.8826 47.9008 64.1123 45.0685 67.797 42.9411L56.997 24.2349Z" fill="$COLOR$"/>
<path d="M195.997 224.833C202.138 221.32 207.521 216.643 211.838 211.069C216.155 205.495 219.322 199.133 221.157 192.347C222.992 185.561 223.461 178.483 222.535 171.517C221.609 164.551 219.308 157.835 215.762 151.75C212.217 145.666 207.496 140.333 201.87 136.056C196.244 131.779 189.823 128.642 182.973 126.823C176.123 125.005 168.979 124.541 161.949 125.458C154.918 126.375 148.138 128.655 141.997 132.168L152.797 150.701C156.482 148.593 160.549 147.225 164.768 146.675C168.986 146.125 173.273 146.403 177.383 147.494C181.493 148.585 185.345 150.467 188.721 153.034C192.096 155.6 194.929 158.8 197.056 162.45C199.184 166.101 200.564 170.131 201.12 174.31C201.675 178.49 201.394 182.737 200.293 186.808C199.192 190.88 197.292 194.697 194.702 198.041C192.111 201.386 188.882 204.192 185.197 206.3L195.997 224.833Z" fill="$COLOR$"/>
<path d="M226.829 55.7503C223.317 49.6658 218.64 44.3329 213.066 40.0559C207.492 35.7789 201.13 32.6416 194.344 30.8233C187.558 29.0049 180.479 28.541 173.514 29.458C166.548 30.375 159.831 32.6551 153.747 36.1679C147.663 39.6808 142.33 44.3577 138.053 49.9316C133.776 55.5054 130.638 61.8671 128.82 68.6535C127.002 75.4398 126.538 82.5178 127.455 89.4834C128.372 96.449 130.652 103.166 134.165 109.25L152.698 98.5503C150.59 94.8996 149.222 90.8695 148.672 86.6902C148.121 82.5108 148.4 78.264 149.491 74.1922C150.582 70.1204 152.464 66.3034 155.03 62.959C157.597 59.6147 160.796 56.8086 164.447 54.7009C168.098 52.5932 172.128 51.2251 176.307 50.6749C180.487 50.1247 184.733 50.403 188.805 51.4941C192.877 52.5851 196.694 54.4674 200.038 57.0336C203.383 59.5998 206.189 62.7996 208.296 66.4503L226.829 55.7503Z" fill="black" fill-opacity="0.25"/>
<path d="M26.2317 194C29.7774 200.142 34.498 205.524 40.124 209.841C45.75 214.158 52.1711 217.325 59.0209 219.16C65.8706 220.996 73.0148 221.464 80.0455 220.538C87.0762 219.613 93.8558 217.311 99.9971 213.766C106.138 210.22 111.521 205.499 115.838 199.873C120.155 194.247 123.322 187.826 125.157 180.976C126.992 174.127 127.461 166.983 126.535 159.952C125.609 152.921 123.308 146.142 119.762 140L101.056 150.8C103.184 154.485 104.565 158.553 105.12 162.771C105.675 166.99 105.394 171.276 104.293 175.386C103.192 179.496 101.292 183.349 98.7017 186.724C96.1116 190.1 92.8819 192.932 89.1971 195.059C85.5123 197.187 81.4446 198.568 77.2261 199.123C73.0077 199.678 68.7212 199.397 64.6114 198.296C60.5015 197.195 56.6488 195.295 53.2732 192.705C49.8977 190.115 47.0653 186.885 44.9379 183.2L26.2317 194Z" fill="black" fill-opacity="0.25"/>
<path d="M56.997 24.2349C50.8557 27.7806 45.4729 32.5012 41.156 38.1272C36.839 43.7531 33.6725 50.1743 31.8371 57.0241C30.0017 63.8738 29.5334 71.018 30.459 78.0487C31.3847 85.0794 33.686 91.859 37.2317 98.0003C40.7774 104.142 45.498 109.524 51.124 113.841C56.7499 118.158 63.1711 121.325 70.0208 123.16C76.8706 124.996 84.0148 125.464 91.0455 124.538C98.0762 123.613 104.856 121.311 110.997 117.766L100.197 99.0595C96.5123 101.187 92.4445 102.568 88.2261 103.123C84.0077 103.678 79.7212 103.397 75.6113 102.296C71.5015 101.195 67.6488 99.2951 64.2732 96.7049C60.8976 94.1147 58.0653 90.8851 55.9378 87.2003C53.8104 83.5155 52.4296 79.4478 51.8742 75.2293C51.3189 71.0109 51.5998 66.7244 52.7011 62.6145C53.8023 58.5047 55.7022 54.652 58.2924 51.2764C60.8826 47.9008 64.1123 45.0685 67.797 42.9411L56.997 24.2349Z" fill="black" fill-opacity="0.25"/>
<path d="M195.997 224.833C202.138 221.32 207.521 216.643 211.838 211.069C216.155 205.495 219.322 199.133 221.157 192.347C222.992 185.561 223.461 178.483 222.535 171.517C221.609 164.551 219.308 157.835 215.762 151.75C212.217 145.666 207.496 140.333 201.87 136.056C196.244 131.779 189.823 128.642 182.973 126.823C176.123 125.005 168.979 124.541 161.949 125.458C154.918 126.375 148.138 128.655 141.997 132.168L152.797 150.701C156.482 148.593 160.549 147.225 164.768 146.675C168.986 146.125 173.273 146.403 177.383 147.494C181.493 148.585 185.345 150.467 188.721 153.034C192.096 155.6 194.929 158.8 197.056 162.45C199.184 166.101 200.564 170.131 201.12 174.31C201.675 178.49 201.394 182.737 200.293 186.808C199.192 190.88 197.292 194.697 194.702 198.041C192.111 201.386 188.882 204.192 185.197 206.3L195.997 224.833Z" fill="black" fill-opacity="0.25"/>
<circle cx="127.497" cy="124.5" r="37.5" fill="$COLOR$"/>
<path d="M250.997 125C250.997 194.036 195.033 250 125.997 250C56.9615 250 0.99707 194.036 0.99707 125C0.99707 55.9647 56.9615 0.000305176 125.997 0.000305176C195.033 0.000305176 250.997 55.9647 250.997 125ZM25.9971 125C25.9971 180.229 70.7686 225 125.997 225C181.225 225 225.997 180.229 225.997 125C225.997 69.7718 181.225 25.0003 125.997 25.0003C70.7686 25.0003 25.9971 69.7718 25.9971 125Z" fill="$COLOR$"/>
</svg>
`;


var rollerHandle = `<svg width="254" height="252" viewBox="0 0 254 252" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="113.927" y="12.0025" width="30" height="225" rx="15" fill="$COLOR$"/>
<rect x="16.0007" y="139.077" width="30" height="225" rx="15" transform="rotate(-90 16.0007 139.077)" fill="$COLOR$"/>
<rect x="113.927" y="12.0025" width="30" height="225" rx="15" fill="black" fill-opacity="0.25"/>
<rect x="16.0005" y="139.077" width="30" height="225" rx="15" transform="rotate(-90 16.0005 139.077)" fill="black" fill-opacity="0.25"/>
<circle cx="129.001" cy="125.32" r="39.2858" fill="$COLOR$"/>
<path d="M254.001 126.003C254.001 195.038 198.036 251.003 129.001 251.003C59.9649 251.003 4.00049 195.038 4.00049 126.003C4.00049 56.9669 59.9649 1.00244 129.001 1.00244C198.036 1.00244 254.001 56.9669 254.001 126.003ZM29.0005 126.003C29.0005 181.231 73.7721 226.003 129.001 226.003C184.229 226.003 229.001 181.231 229.001 126.003C229.001 70.774 184.229 26.0025 129.001 26.0025C73.7721 26.0025 29.0005 70.774 29.0005 126.003Z" fill="$COLOR$"/>
<g filter="url(#filter0_d_6_85)">
<rect x="29.7036" y="3.48877" width="170.52" height="30" rx="15" transform="rotate(45 29.7036 3.48877)" fill="$COLOR$"/>
</g>
<g filter="url(#filter1_d_6_85)">
<rect x="29.7036" y="3.48877" width="170.52" height="30" rx="15" transform="rotate(45 29.7036 3.48877)" fill="black" fill-opacity="0.25" shape-rendering="crispEdges"/>
</g>
<g filter="url(#filter2_d_6_85)">
<circle cx="26.4998" cy="23.4986" r="22.5" fill="$COLOR$"/>
</g>
<defs>
<filter id="filter0_d_6_85" x="10.7036" y="9.70198" width="137.363" height="137.363" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_85"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_85" result="shape"/>
</filter>
<filter id="filter1_d_6_85" x="10.7036" y="9.70198" width="137.363" height="137.363" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_85"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_85" result="shape"/>
</filter>
<filter id="filter2_d_6_85" x="-0.000244141" y="0.998535" width="53" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_85"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_85" result="shape"/>
</filter>
</defs>
</svg>
`;

var rackBasic = `<svg width="250" height="60" viewBox="0 0 250 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_55_26)">
<rect y="60" width="60" height="250" rx="5" transform="rotate(-90 0 60)" fill="$COLOR$"/>
<rect x="12" y="45" width="30" height="226" rx="5" transform="rotate(-90 12 45)" fill="black" fill-opacity="0.25"/>
</g>
<defs>
<clipPath id="clip0_55_26">
<rect y="60" width="60" height="250" rx="5" transform="rotate(-90 0 60)" fill="white"/>
</clipPath>
</defs>
</svg>
`;

var rackWithRotation = `<svg width="382" height="225" viewBox="0 0 382 225" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_55_29)">
<rect y="142" width="60" height="90" rx="5" transform="rotate(-90 0 142)" fill="$COLOR$"/>
<rect x="12" y="127" width="30" height="66" rx="5" transform="rotate(-90 12 127)" fill="black" fill-opacity="0.25"/>
</g>
<g clip-path="url(#clip1_55_29)">
<rect x="292" y="142" width="60" height="90" rx="5" transform="rotate(-90 292 142)" fill="$COLOR$"/>
<rect x="304" y="127" width="30" height="66" rx="5" transform="rotate(-90 304 127)" fill="black" fill-opacity="0.25"/>
</g>
<rect x="177.933" y="9.90015" width="27" height="202.5" rx="13.5" fill="$COLOR$"/>
<rect x="89.8005" y="124.267" width="27" height="202.5" rx="13.5" transform="rotate(-90 89.8005 124.267)" fill="$COLOR$"/>
<rect x="177.933" y="9.90015" width="27" height="202.5" rx="13.5" fill="black" fill-opacity="0.25"/>
<rect x="89.8" y="124.267" width="27" height="202.5" rx="13.5" transform="rotate(-90 89.8 124.267)" fill="black" fill-opacity="0.25"/>
<circle cx="191.5" cy="111.885" r="35.3571" fill="$COLOR$"/>
<path d="M304 112.5C304 174.632 253.632 225 191.5 225C129.368 225 79 174.632 79 112.5C79 50.368 129.368 0 191.5 0C253.632 0 304 50.368 304 112.5ZM101.5 112.5C101.5 162.206 141.794 202.5 191.5 202.5C241.206 202.5 281.5 162.206 281.5 112.5C281.5 62.7944 241.206 22.5 191.5 22.5C141.794 22.5 101.5 62.7944 101.5 112.5Z" fill="$COLOR$"/>
<defs>
<clipPath id="clip0_55_29">
<rect y="142" width="60" height="90" rx="5" transform="rotate(-90 0 142)" fill="white"/>
</clipPath>
<clipPath id="clip1_55_29">
<rect x="292" y="142" width="60" height="90" rx="5" transform="rotate(-90 292 142)" fill="white"/>
</clipPath>
</defs>
</svg>
`;

var spring = `<svg width="175" height="268" viewBox="0 0 175 268" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="14" y="58.8229" width="150" height="15" rx="7.5" transform="rotate(-15 14 58.8229)" fill="$COLOR$"/>
<rect x="14" y="58.8228" width="150" height="15" rx="7.5" transform="rotate(-15 14 58.8228)" fill="black" fill-opacity="0.25"/>
<rect x="17.8823" y="55" width="150" height="15" rx="7.5" transform="rotate(15 17.8823 55)" fill="$COLOR$"/>
<rect x="17.8823" y="55" width="150" height="15" rx="7.5" transform="rotate(15 17.8823 55)" fill="black" fill-opacity="0.25"/>
<rect x="14" y="128.823" width="150" height="15" rx="7.5" transform="rotate(-15 14 128.823)" fill="$COLOR$"/>
<rect x="14" y="128.823" width="150" height="15" rx="7.5" transform="rotate(-15 14 128.823)" fill="black" fill-opacity="0.25"/>
<rect x="17.8823" y="125" width="150" height="15" rx="7.5" transform="rotate(15 17.8823 125)" fill="$COLOR$"/>
<rect x="17.8823" y="125" width="150" height="15" rx="7.5" transform="rotate(15 17.8823 125)" fill="black" fill-opacity="0.25"/>
<rect x="14" y="198.823" width="150" height="15" rx="7.5" transform="rotate(-15 14 198.823)" fill="$COLOR$"/>
<rect x="14" y="198.823" width="150" height="15" rx="7.5" transform="rotate(-15 14 198.823)" fill="black" fill-opacity="0.25"/>
<rect x="17.8823" y="195" width="150" height="15" rx="7.5" transform="rotate(15 17.8823 195)" fill="$COLOR$"/>
<rect x="17.8823" y="195" width="150" height="15" rx="7.5" transform="rotate(15 17.8823 195)" fill="black" fill-opacity="0.25"/>
<rect width="175" height="40" rx="5" fill="$COLOR$"/>
<rect y="228" width="175" height="40" rx="5" fill="$COLOR$"/>
</svg>
`;


var colorListArr = ['5B93FF','FF5B79','5BFF93','FFC75B'];
var comptListArr = [rollerBasic,rollerHandle,rackBasic,rackWithRotation,spring]




var componentHTML = `
<div class="componentInfo" id="$COMPID$">
    <div class="inputFields">
        <div class="colorOfComponent" style="background-color:$COLOR$;" onclick="showColSelector('$COMPID$')"  onblur="hideColSelector('$COMPID$')" tabindex="0"></div>
        <div class="colorSelector">
            <div class="selectorRow">
                <div class="selectorBlue" onclick="setColorOfComp('0','$COMPID$')"></div>
                <div class="selectorPink" onclick="setColorOfComp('1','$COMPID$')"></div>
            </div>
            <div class="selectorRow">
                <div class="selectorGreen" onclick="setColorOfComp('2','$COMPID$')"></div>
                <div class="selectorYellow" onclick="setColorOfComp('3','$COMPID$')"></div>
            </div>
        </div>
        <input type="number" placeholder="x" value="$XCOR$" oninput="changeCord('$COMPID$',gridSize*this.value,0)">
        <input type="number" placeholder="y" value="$YCOR$" oninput="changeCord('$COMPID$',gridSize*this.value,1)">
        <button class="compSelectorButton" onclick="selectComponent('$COMPID$')" onblur="hideCompSelector('$COMPID$')">$COMPLOOK$</button>
        <div class="compSelector">
            <div class="compOption" onclick="changeComp('$COMPID$',0)">`+comptListArr[0]+`</div>
            <div class="compOption" onclick="changeComp('$COMPID$',1)">`+comptListArr[1]+`</div>
            <div class="compOption" onclick="changeComp('$COMPID$',2)">`+comptListArr[2]+`</div>
            <div class="compOption" onclick="changeComp('$COMPID$',3)">`+comptListArr[3]+`</div>
            <div class="compOption" onclick="changeComp('$COMPID$',4)" style="margin-bottom:0px;">`+comptListArr[4]+`</div>
        </div>
    </div>
    <div class="clickables">
        <a class="material-icons" href="#" style="margin-right: 0;" onclick="remComp('$COMPID$')">close</a>
        <a class="material-icons" href="#" style="margin-right: 0;transform: rotate(-90deg)" onclick="editDetail('$COMPID$')">arrow_drop_down</a>
    </div>
</div>

`;

var editSlider = `
<div class="sliderEditor">
  <input type="number" value="$CURVAL$" oninput="updateTextInput(this.value, this.parentNode.querySelector('input[type=range]'),'$DETEDIT$','$ELEMID$');">
  <div class="rangeLim">$LOWERLIM$</div>
  <div class="property">$PROPNAME$</div>
  <input type="range" step="5" min="$LOWERLIM$" max="$UPPERLIM$" value="$CURVAL$" oninput="updateTextInput(this.value, this.parentNode.querySelector('input[type=number]'),'$DETEDIT$','$ELEMID$',$MULT$);">
  <div class="rangeLim">$UPPERLIM$</div>
</div>
`;

var editCheckbox = `
<div class="checkboxEditor">
  <input type="checkbox" oninput="updateCheckInput(this.checked,'$DETEDIT$','$ELEMID$')" $CURVAL$>
  <label><i class="material-icons">check</i></label>
  <div class="checkboxLabel">$PROPNAME$</div>
</div>
`;


function rgbToHex(rgb) {
  var rgbArray = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (rgbArray === null) {
    return rgb;
  }
  var hex = '#';
  for (var i = 1; i <= 3; i++) {
    var decimal = parseInt(rgbArray[i]);
    var hexPart = decimal.toString(16);
    if (hexPart.length < 2) {
      hexPart = '0' + hexPart;
    }
    hex += hexPart;
  }
  return hex.toUpperCase();
}

var componentData = 
{"e8bbf5fd49ed903e46d9ad5ce3222e8e":{"color":"0","component":0,"coordinates":[500,1000],"componentPhysicsInfo":{"mass":1,"size":1,"angle":0,"velocity":[0,0],"angularVelocity":0,"collision":false,"gravity":false}},"53af1e27f5947fd462eed5a79d284f95":{"color":"1","component":1,"coordinates":[375,750],"componentPhysicsInfo":{"mass":1,"size":1,"angle":0,"velocity":[0,0],"angularVelocity":0,"collision":false,"gravity":false}},"c34cadcaf18545184ba3903fbd7bea8d":{"color":"2","component":"2","coordinates":[-500,250],"componentPhysicsInfo":{"mass":1,"size":1,"angle":0,"velocity":[0,0],"angularVelocity":0,"collision":false,"gravity":false}},"3adf16d86b5d912c20dcdca613dd99dd":{"color":"3","component":3,"coordinates":[0,0],"componentPhysicsInfo":{"mass":1,"size":1,"angle":0,"velocity":[0,0],"angularVelocity":0,"collision":false,"gravity":false}},"c10e69ed1b819193fe8437de8d72c148":{"color":"0","component":4,"coordinates":[-500,-100],"componentPhysicsInfo":{"mass":1,"size":1,"angle":0,"velocity":[0,0],"angularVelocity":0,"collision":false,"gravity":false}},"2d4d643b5637467506bedd3ffcdb4bef":{"color":"1","component":"2","coordinates":[0,-2500],"componentPhysicsInfo":{"mass":1,"size":4.6,"angle":0,"velocity":[0,0],"angularVelocity":0,"collision":false,"gravity":false}}}