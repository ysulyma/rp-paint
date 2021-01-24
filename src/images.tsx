import * as React from "react";

export const Brush = (
  <g fill="#fff">
    <path d="m23.2859 93.4398c-.0321-.002-.0563-.0008-.0887-.0029-.3133-.0198-.6378-.0447-.9657-.0753-.328-.0306-.6593-.0666-.9909-.1101-.3318-.0435-.6632-.0936-.988-.1521s-.644-.1257-.951-.2014c-.307-.0756-.6014-.16-.88-.2549-.1392-.0475-.275-.098-.4052-.1507-.1301-.0527-.2545-.1084-.3742-.1666-.1196-.0582-.2338-.1186-.3416-.1826-.1079-.0639-.2101-.1313-.3047-.2013s-.1816-.1425-.2618-.2187c-.0801-.0763-.1531-.1562-.2173-.239l-.1672-.2593c-.047-.0898-.0854-.1829-.1138-.2797-.0286-.0967-.0477-.1972-.0563-.3013-.0085-.1041-.0067-.2113.006-.323.0127-.1118.018-.222.0147-.3289-.0031-.1069-.0145-.2107-.0325-.3129-.018-.102-.0434-.201-.0754-.2984s-.0705-.1925-.1154-.2854c-.0448-.0928-.0956-.1841-.1523-.2724-.0567-.0882-.1187-.1739-.1863-.2578s-.1415-.1652-.2189-.2448c-.0775-.0796-.1592-.158-.2455-.2332-.0864-.0753-.1764-.1477-.2708-.2188-.0942-.0711-.1931-.1401-.2943-.2072-.0419-.0278-.09-.051-.1331-.0782-1.5258 3.321-3.9582 5.3779-8.95801 6.29-.81882.1494-.54858 1.1271 0 1.1271 5.90331 0 12.69441-.0272 17.76821-1.5602z"/>
    <path d="m23.147 78.0639c-3.7321 0-6.8361 2.6364-7.4747 6.1118-.3443 1.2582-.7294 2.3904-1.1966 3.4072.0432.0271.0912.0504.1332.0782.1011.0671.2.136.2943.2072.0943.0711.1843.1435.2707.2187.0863.0752.168.1537.2455.2333.0774.0795.1513.1609.2189.2448s.1296.1696.1863.2578c.0567.0883.1075.1796.1523.2724.0449.0928.0834.188.1154.2854.032.0973.0574.1963.0754.2984s.0294.206.0325.3128c.0033.107-.002.2171-.0147.3289s-.0145.219-.006.3231c.0086.1041.0277.2045.0563.3013.0284.0968.0668.1899.1138.2796.047.0896.1029.1765.1672.2593.0642.0828.1372.1628.2173.239.0802.0763.1672.1488.2618.2188.0946.0699.1969.1373.3047.2013s.222.1243.3416.1825c.1197.0583.2441.1139.3742.1666.1302.0528.266.1033.4052.1507.2786.0949.573.1793.88.255.307.0756.6262.1428.951.2013s.6563.1087.988.1521c.3316.0435.6629.0795.9909.1101.3279.0306.6524.0556.9657.0754.0324.002.0566.0009.0887.0028 2.9268-.8843 5.2842-2.267 6.5652-4.4401.5674-1.0421.8888-2.2334.8888-3.497 0-4.1084-3.3986-7.4388-7.5929-7.4388z"/>
    <path d="m71.302 5.00013c-.1587.0034-.3394.07411-.5029.28538-.232.31688-30.4484 41.40919-37.3275 53.54479.164.0523.332.1059.5014.1651 1.0616.3707 2.235.8774 3.4873 1.5674 1.4894.8207 3.0912 1.9006 4.7534 3.3159 7.5537-11.9997 29.4184-57.63808 29.5882-57.99055.1568-.39472.0022-.67845-.1582-.78806-.0101-.00685-.0209-.01359-.0326-.02029-.0764-.04393-.1857-.08232-.3091-.07967z"/>
    <path d="m32.6403 60.3861c-.1163.2378-.2152.4547-.2957.6475-2.5564 6.1258-6.3889 13.48-7.4496 16.2842 2.033.308 3.799 1.4052 4.962 2.9625 1.9802-2.2656 6.6581-9.0957 10.8541-14.2271.1599-.1956.338-.4317.5309-.7041-1.5083-1.3064-2.9557-2.3097-4.2979-3.0783-1.2986-.7438-2.4989-1.2688-3.5657-1.6414-.2549-.089-.5-.1709-.7381-.2433z"/>
  </g>
);

export function Eraser() {
  return (
    <svg viewBox="0 0 75 75">
      <g transform="translate(0, 45) rotate(-40) translate(-31.543342,-132.63477)">
        <path
          fill="#CCC"
          stroke="#000"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          d="m 36.072339,133.16377 h 31.680484 v 32.87415 H 36.072339 c -2.215998,0 -3.999997,-1.784 -3.999997,-4 v -24.87415 c 0,-2.216 1.783999,-4 3.999997,-4 z"
        />
        <path
          fill="#D34A4A"
          stroke="#000"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          d="m 67.752823,133.16377 h 31.680483 c 2.216004,0 3.999994,1.784 3.999994,4 v 24.87415 c 0,2.216 -1.78399,4 -3.999994,4 H 67.752823 Z"/>
      </g>
    </svg>
  );
}

export function Sheets() {
  return (
    <svg viewBox="0 0 100 100">
      <rect
        x="10" y="40" height="50" width="50" rx="15" ry="15"
        fill="none" stroke="#FFF" strokeWidth="3"/>
      <rect
        x="40" y="10" height="50" width="50" rx="15" ry="15"
        fill="none" stroke="#FFF" strokeWidth="3"/>
    </svg>
  );
}