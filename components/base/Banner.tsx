import Link from "@/components/base/Link";
import { useTheme } from "next-themes";
import React from "react";

interface Props {
  smallText?: string;
  text: string;
  show: boolean;
}

const Banner: React.FC<Props> = ({ show, text, smallText = "" }) => {
  const { resolvedTheme } = useTheme();

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-10 pb-2 sm:pb-5">
      <div className="px-2 mx-auto max-w-4xl sm:px-6 lg:px-8">
        <div className="">
          <div className="flex flex-wrap justify-between items-center space-x-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={56}
              height={56}
              viewBox="0 0 172 172"
              style={{ fill: "#000000" }}
            >
              <defs>
                <linearGradient
                  x1="77.099"
                  y1="63.20283"
                  x2="163.37133"
                  y2="192.32825"
                  gradientUnits="userSpaceOnUse"
                  id="color-1_ruLDJHLUddtV_gr1"
                >
                  <stop offset={0} stopColor="#FACC15" />
                  <stop offset={1} stopColor="#CA8A04" />
                </linearGradient>
                <linearGradient
                  x1="5.04533"
                  y1="87.46917"
                  x2="130.18608"
                  y2="165.421"
                  gradientUnits="userSpaceOnUse"
                  id="color-2_ruLDJHLUddtV_gr2"
                >
                  <stop offset={0} stopColor="#FACC15" />
                  <stop offset={1} stopColor="#CA8A04" />
                </linearGradient>
                <radialGradient
                  cx="136.13083"
                  cy="36.09133"
                  r="46.13542"
                  gradientUnits="userSpaceOnUse"
                  id="color-3_ruLDJHLUddtV_gr3"
                >
                  <stop offset="0.348" stopColor="#000000" />
                  <stop
                    offset="0.936"
                    stopColor="#000000"
                    stopOpacity="0.098"
                  />
                  <stop offset={1} stopColor="#000000" stopOpacity={0} />
                </radialGradient>
                <linearGradient
                  x1="111.76058"
                  y1="12.07583"
                  x2="161.81975"
                  y2="62.135"
                  gradientUnits="userSpaceOnUse"
                  id="color-4_ruLDJHLUddtV_gr4"
                >
                  <stop
                    offset={0}
                    stopColor={resolvedTheme === "dark" ? "#FECDD3" : "#C7D2FE"}
                  />
                  <stop
                    offset="0.443"
                    stopColor={resolvedTheme === "dark" ? "#FB7185" : "#818CF8"}
                  />
                  <stop
                    offset={1}
                    stopColor={resolvedTheme === "dark" ? "#E11D48" : "#4F46E5"}
                  />
                </linearGradient>
              </defs>
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none" />
                <g>
                  <path
                    d="M32.25,93.16667l129,-51.27033v94.27033c0,3.95958 -3.20708,7.16667 -7.16667,7.16667h-121.83333z"
                    fill="url(#color-1_ruLDJHLUddtV_gr1)"
                  />
                  <path
                    d="M10.75,41.89633v94.27033c0,3.95958 3.20708,7.16667 7.16667,7.16667h136.16667c1.75942,0 3.35042,-0.65933 4.59742,-1.71283z"
                    fill="url(#color-2_ruLDJHLUddtV_gr2)"
                  />
                  <path
                    d="M10.75,39.41667h150.5v6.063l-62.06333,48.19583c-7.75792,6.02358 -18.61542,6.02358 -26.37333,0l-62.06333,-48.19583z"
                    fill="#000000"
                    opacity="0.05"
                  />
                  <path
                    d="M10.75,37.625h150.5v6.063l-64.62183,46.98467c-6.31383,4.67267 -14.9425,4.67267 -21.25633,0l-64.62183,-46.98467z"
                    fill="#000000"
                    opacity="0.07"
                  />
                  <path
                    d="M17.91667,28.66667h136.16667c3.95958,0 7.16667,3.20708 7.16667,7.16667v6.063l-67.18033,45.7735c-4.86975,3.31817 -11.27317,3.31817 -16.13933,0l-67.18033,-45.7735v-6.063c0,-3.95958 3.20708,-7.16667 7.16667,-7.16667z"
                    fill="#FEF08A"
                  />
                  <path
                    d="M154.08333,28.66667h-63.89442c-0.36192,2.3435 -0.60558,4.72283 -0.60558,7.16667c0,25.72833 20.855,46.58333 46.58333,46.58333c9.245,0 17.83783,-2.72692 25.08333,-7.37092v-39.21242c0,-3.95958 -3.20708,-7.16667 -7.16667,-7.16667z"
                    fill="url(#color-3_ruLDJHLUddtV_gr3)"
                    opacity="0.3"
                  />
                  <path
                    d="M172,36.55c0,19.70833 -16.125,35.83333 -35.83333,35.83333c-19.70833,0 -35.83333,-16.125 -35.83333,-35.83333c0,-19.70833 16.125,-35.83333 35.83333,-35.83333c19.70833,0 35.83333,15.76667 35.83333,35.83333"
                    fill="url(#color-4_ruLDJHLUddtV_gr4)"
                  />
                  <path
                    d="M136.19533,57.33333c-1.57308,0 -2.87383,-0.47658 -3.89508,-1.42975c-1.02483,-0.95317 -1.53367,-2.11058 -1.53367,-3.46867c0,-1.41542 0.516,-2.57642 1.548,-3.483c1.032,-0.90658 2.32558,-1.35808 3.88075,-1.35808c1.57308,0 2.86308,0.45867 3.86642,1.37242c1.00333,0.91375 1.505,2.07117 1.505,3.46867c0,1.41542 -0.49808,2.58717 -1.49067,3.51167c-0.99258,0.9245 -2.28617,1.38675 -3.88075,1.38675zM140.9755,15.88492l-1.032,26.17625c-0.03225,0.79908 -0.688,1.43333 -1.49067,1.43333h-4.687c-0.80267,0 -1.462,-0.63425 -1.49067,-1.43692l-0.98183,-26.17625c-0.02867,-0.84567 0.64858,-1.548 1.49425,-1.548h6.69725c0.84567,0 1.52292,0.70233 1.49067,1.55158z"
                    fill="#ffffff"
                  />
                </g>
              </g>
            </svg>

            <div className="flex flex-1 justify-between items-center p-2 w-0 bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-lg shadow-lg">
              <p className="ml-3 font-medium text-gray-900 select-none truncate">
                <span className="md:hidden">
                  {smallText ? smallText : text}
                </span>
                <span className="hidden md:inline">{text}</span>
              </p>
              <div className="flex-shrink-0 order-3 mt-2 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <Link
                  href="/appcues"
                  className="flex justify-center items-center py-2 px-4 text-sm font-medium text-yellow-300 bg-gray-900 rounded-md border border-transparent shadow-sm hover:bg-gray-100"
                >
                  Open
                </Link>
              </div>
            </div>
            {/* <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="flex p-2 -mr-1 rounded-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
