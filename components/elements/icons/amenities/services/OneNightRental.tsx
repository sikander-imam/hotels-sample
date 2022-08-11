import React from "react";
import { palette } from "src/components/foundation/palette";

const OneNightRentalIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill,
}) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4837 10.0675C22.3637 9.97147 22.2117 9.92491 22.0584 9.93716H19.7534L21.9144 7.52235L22.1202 7.29597L22.2505 7.13818C22.2873 7.08741 22.3172 7.0321 22.3397 6.97354C22.3657 6.91034 22.3797 6.84294 22.3808 6.7746C22.3981 6.61449 22.3203 6.45902 22.1819 6.3767C22.0016 6.29388 21.8038 6.25614 21.6056 6.26694H18.889C18.7459 6.25896 18.6046 6.30278 18.4911 6.39041C18.3963 6.47017 18.3432 6.58902 18.347 6.71284C18.347 6.89576 18.4088 7.01014 18.5323 7.05586C18.7108 7.10534 18.896 7.12619 19.0811 7.1176H20.8373C20.7687 7.22051 20.6727 7.33713 20.5492 7.4812L20.0964 7.98886L19.5064 8.67488L18.8204 9.45695C18.5734 9.73136 18.4111 9.91889 18.3333 10.0195C18.1717 10.2268 18.1924 10.5227 18.3813 10.7055C18.5253 10.8126 18.7032 10.8638 18.8821 10.8496H22.0653C22.2174 10.8618 22.3687 10.8179 22.4906 10.7261C22.5814 10.6439 22.6314 10.526 22.6278 10.4037C22.631 10.276 22.5784 10.1533 22.4838 10.0675L22.4837 10.0675Z"
        fill={fill}
      />
      <g clipPath="url(#clip0)">
        <g clipPath="url(#clip1)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.388 15.3423C20.2695 15.2123 20.088 15.1721 19.9303 15.2409C15.42 17.2187 10.2502 14.949 8.38304 10.1712C7.43494 7.745 7.49215 5.00854 8.54075 2.62926C8.63901 2.40918 8.55022 2.1464 8.34246 2.04231C8.23583 1.98887 8.11276 1.98594 8.00394 2.03416C3.05921 4.18583 0.697304 10.1764 2.72849 15.4144C4.75968 20.6524 10.4148 23.1544 15.3596 21.0027C17.6148 20.0214 19.4373 18.1746 20.463 15.8315C20.5351 15.6677 20.5054 15.4737 20.388 15.3423H20.388ZM11.6867 20.8965C6.79838 20.8956 2.8363 16.6971 2.83713 11.5188C2.83765 8.11861 4.57593 4.9852 7.37977 3.33012C7.04775 4.37407 6.87906 5.4685 6.88041 6.57009C6.88067 12.2353 11.2163 16.8276 16.5643 16.8273C17.4605 16.8273 18.3525 16.6954 19.2145 16.4355C17.6007 19.1997 14.7548 20.8862 11.6867 20.8965V20.8965Z"
            fill={fill}
          />
        </g>
        <path
          d="M16.2591 6.80239C16.1391 6.70634 15.987 6.65978 15.8338 6.67203H13.5288L15.6897 4.25722L15.8956 4.03084L16.0259 3.87305C16.0627 3.82228 16.0926 3.76697 16.1151 3.70841C16.1411 3.64521 16.155 3.57781 16.1562 3.50947C16.1735 3.34936 16.0957 3.19389 15.9573 3.11157C15.777 3.02875 15.5792 2.99101 15.381 3.00181H12.6644C12.5213 2.99383 12.3799 3.03765 12.2665 3.12528C12.1717 3.20504 12.1186 3.32389 12.1224 3.44771C12.1224 3.63063 12.1842 3.74501 12.3076 3.79073C12.4862 3.84021 12.6714 3.86106 12.8565 3.85247H14.6127C14.5441 3.95538 14.4481 4.072 14.3246 4.21607L13.8718 4.72373L13.2818 5.40975L12.5958 6.19182C12.3488 6.46623 12.1865 6.65376 12.1087 6.75437C11.9471 6.96171 11.9678 7.25756 12.1567 7.44039C12.3007 7.54749 12.4786 7.59868 12.6575 7.58445H15.8407C15.9928 7.59663 16.1441 7.55273 16.266 7.46098C16.3567 7.37874 16.4068 7.26091 16.4032 7.13855C16.4064 7.01086 16.3538 6.88815 16.2592 6.8024L16.2591 6.80239Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="18.5019"
            height="19.7744"
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
        <clipPath id="clip1">
          <rect
            width="18.5019"
            height="19.7744"
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

OneNightRentalIcon.defaultProps = {
  fill: palette.grey?.[500],
};

export default OneNightRentalIcon;
