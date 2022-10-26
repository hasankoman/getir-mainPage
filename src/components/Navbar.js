import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("getir");
  return (
    <nav className=" bg-getir-purple-200 h-[45px] sticky top-0 w-full z-50">
      <div className="--container flex items-center justify-between flex-row">
        <ul className="flex gap-[1.5px] self-end mx-auto md:m-0">
          <li
            className={`nav-link  ${active === "getir" ? "active" : ""}`}
            onClick={() => setActive("getir")}
          >
            <a href="#">
              <svg
                viewBox="0 0 53 24"
                fill="none"
                className="h-[16px] w-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.0384 9.24019C26.0384 6.49999 23.8012 4.71289 20.5182 4.71289C17.4074 4.71289 14.1509 6.95007 14.1509 11.9275C14.1509 15.7267 16.4542 18.5331 20.4256 18.5331C22.6627 18.5331 25.125 17.2623 25.7471 16.3886C25.7471 16.3886 25.3235 14.7471 24.1586 14.7471C23.5497 14.7471 23.0996 14.9854 22.5965 15.1839C22.0803 15.3957 21.4581 15.5943 20.6638 15.5943C19.5519 15.5943 17.6456 15.1575 17.6456 12.7614C17.6456 12.7614 18.5458 13.0262 20.5844 13.0262C24.9793 13.0394 26.0384 11.1861 26.0384 9.24019ZM20.6506 7.67814C22.1597 7.67814 22.8878 8.49888 22.8878 9.25343C22.8878 10.1404 22.0935 10.7096 20.6506 10.7096C18.5458 10.7096 17.7515 10.4184 17.7515 10.4051C17.7383 9.14753 18.7444 7.67814 20.6506 7.67814Z"
                  fill={`${active === "getir" ? "#FFD300" : "#dbdbff"}`}
                />
                <path
                  d="M34.206 15.6206C32.6969 15.6206 31.9159 14.3498 31.7703 13.7938C31.6246 13.2511 31.532 12.47 31.532 11.6625L31.5585 7.55885H32.6572C33.5441 7.55885 34.2192 7.2941 34.709 6.77783C35.1856 6.26155 35.4371 5.55995 35.4371 4.6995H31.5717L31.5452 2.88593C31.5452 2.30347 31.5452 1.84015 31.5585 1.48273C31.5717 1.12532 31.5849 0.847325 31.5982 0.635521C31.6114 0.41048 31.6379 0.225151 31.6511 0.0927734C30.473 0.0927734 29.586 0.344292 28.9639 0.847326C28.3417 1.35036 28.0372 2.1711 28.0372 3.33602L28.0107 12.4171C28.0107 16.1369 29.7846 18.5594 33.1735 18.5594C34.8414 18.5594 36.0593 17.6592 36.0593 16.2958C36.0593 15.8192 35.9931 15.5677 35.9534 15.4088C35.6489 15.4883 35.1062 15.6206 34.206 15.6206Z"
                  fill={`${active === "getir" ? "#FFD300" : "#dbdbff"}`}
                />
                <path
                  d="M42.6917 15.7922C41.9372 15.7922 41.4606 15.2494 41.4606 14.3493V7.79658C41.4606 7.21412 41.4606 6.7508 41.4738 6.39338C41.4871 6.03596 41.5003 5.75797 41.5136 5.54617C41.5268 5.32112 41.5533 5.1358 41.5665 5.00342C40.3751 5.00342 39.4749 5.25493 38.8528 5.75797C38.2306 6.261 37.9261 7.08174 37.9261 8.24666L37.8997 14.9185C37.8997 17.3013 39.4352 18.625 41.3679 18.5456C42.5858 18.4927 43.6448 17.9234 43.6448 16.6394C43.6448 16.1099 43.5522 15.673 43.5522 15.673C43.2874 15.7392 43.0888 15.7922 42.6917 15.7922Z"
                  fill={`${active === "getir" ? "#FFD300" : "#dbdbff"}`}
                />
                <path
                  d="M51.3625 5.03027C50.6344 5.03027 49.8931 5.1097 49.1518 5.28179C48.4105 5.44065 47.7353 5.75835 47.1396 6.22167C46.5439 6.68499 46.0541 7.3204 45.6835 8.14114C45.3128 8.96188 45.1143 10.0077 45.1143 11.305V15.0512C45.1143 16.2029 45.2599 17.2752 45.9615 17.8047C46.716 18.3871 47.603 18.4136 48.7811 18.4136C48.7679 18.2945 48.7414 17.9635 48.7282 17.7385C48.7149 17.5267 48.6884 17.2487 48.6884 16.8913C48.6752 16.5339 48.6752 16.0705 48.6752 15.4881V10.6828C48.6752 9.54434 48.8605 8.08819 50.8594 7.9161C51.9846 7.82344 52.9775 7.38659 52.9775 6.16872C52.9775 5.89073 52.9113 5.34798 52.7657 5.03027H51.3625Z"
                  fill={`${active === "getir" ? "#FFD300" : "#dbdbff"}`}
                />
                <path
                  d="M6.24821 4.71289C2.14451 4.71289 0 7.58548 0 11.0802C0 14.3102 1.97242 17.3417 5.55985 17.3417C7.41313 17.3417 8.49862 16.5474 8.76338 16.3224V17.9374C8.76338 19.7907 8.0353 21.035 6.16878 21.035C5.26862 21.035 4.59349 20.7835 3.98456 20.4923C3.42857 20.2275 3.0182 19.923 2.47546 19.923C1.08549 19.923 0.7016 21.6439 0.7016 21.6572C1.74738 23.0074 4.14341 24.0003 6.15554 24.0003C10.1136 24.0003 12.2978 21.6969 12.2978 17.1166C12.2978 17.1166 12.2978 12.5099 12.2978 11.7554C12.2846 7.57224 10.4313 4.71289 6.24821 4.71289ZM6.23497 14.2308C4.69939 14.2308 3.52124 13.2645 3.52124 11.1332C3.52124 8.8563 4.72587 7.67814 6.23497 7.67814C7.7176 7.67814 8.80309 8.57831 8.80309 10.9611C8.80309 13.3968 7.62493 14.2308 6.23497 14.2308Z"
                  fill={`${active === "getir" ? "#FFD300" : "#dbdbff"}`}
                />
                <path
                  d="M38.7997 3.69333C39.0777 3.82571 39.3689 3.90513 39.6866 3.90513C40.4147 3.90513 40.9839 3.56095 41.4075 2.87259C41.5796 2.55488 41.6723 2.22394 41.6723 1.86652C41.6723 1.53558 41.5929 1.21787 41.434 0.913406C41.2751 0.622176 41.0369 0.397134 40.7192 0.238282C40.4412 0.0794288 40.1632 0 39.8587 0C39.5278 0 39.1968 0.0926649 38.8791 0.277993C38.5614 0.463321 38.3231 0.728075 38.1378 1.05902C37.9657 1.35025 37.873 1.69443 37.873 2.06509C37.873 2.39603 37.9525 2.71374 38.1113 2.99173C38.2702 3.28296 38.5085 3.52124 38.7997 3.69333Z"
                  fill={`${active === "getir" ? "#FFD300" : "#dbdbff"}`}
                />
              </svg>
            </a>
          </li>
          <li
            className={`nav-link ${active === "yemek" ? "active" : ""}`}
            onClick={() => setActive("yemek")}
          >
            <a href="#" className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="87.333"
                height="16"
                fill="none"
                viewBox="0 0 131 24"
              >
                <path
                  d="M26.038 9.24c0-2.74-2.237-4.527-5.52-4.527-3.111 0-6.367 2.237-6.367 7.215 0 3.799 2.303 6.606 6.275 6.606 2.237 0 4.699-1.271 5.322-2.145 0 0-.424-1.642-1.588-1.642-.609 0-1.059.238-1.562.437-.516.212-1.138.41-1.933.41-1.112 0-3.018-.437-3.018-2.833 0 0 .9.265 2.939.265 4.395.013 5.454-1.84 5.454-3.786zM20.65 7.678c1.509 0 2.237.821 2.237 1.575 0 .887-.794 1.456-2.237 1.456-2.105 0-2.899-.291-2.899-.305-.013-1.258.993-2.727 2.899-2.727zm13.556 7.943c-1.509 0-2.29-1.271-2.436-1.827-.146-.543-.238-1.324-.238-2.131l.026-4.104h1.099c.887 0 1.562-.265 2.052-.781.477-.516.728-1.218.728-2.078h-3.865l-.026-1.814.013-1.403.04-.847.053-.543c-1.178 0-2.065.252-2.687.755s-.927 1.324-.927 2.489l-.026 9.081c0 3.72 1.774 6.142 5.163 6.142 1.668 0 2.886-.9 2.886-2.264 0-.477-.066-.728-.106-.887-.305.08-.847.212-1.747.212zm8.486.171c-.755 0-1.231-.543-1.231-1.443V7.797l.013-1.403.04-.847.053-.543c-1.191 0-2.092.252-2.714.755s-.927 1.324-.927 2.489L37.9 14.92c0 2.383 1.535 3.707 3.468 3.627 1.218-.053 2.277-.622 2.277-1.906 0-.529-.093-.966-.093-.966-.265.066-.463.119-.861.119zM51.363 5.03c-.728 0-1.469.079-2.211.252-.741.159-1.416.477-2.012.94s-1.086 1.099-1.456 1.919-.569 1.867-.569 3.164v3.746c0 1.152.146 2.224.847 2.754.755.582 1.642.609 2.82.609l-.053-.675-.04-.847-.013-1.403v-4.805c0-1.138.185-2.595 2.184-2.767 1.125-.093 2.118-.53 2.118-1.747 0-.278-.066-.821-.212-1.138h-1.403zM6.248 4.713C2.145 4.713 0 7.585 0 11.08c0 3.23 1.972 6.262 5.56 6.262 1.853 0 2.939-.794 3.204-1.019v1.615c0 1.853-.728 3.098-2.595 3.098-.9 0-1.575-.252-2.184-.543-.556-.265-.966-.569-1.509-.569-1.39 0-1.774 1.721-1.774 1.734C1.747 23.007 4.143 24 6.156 24c3.958 0 6.142-2.303 6.142-6.884v-5.361c-.013-4.183-1.867-7.043-6.05-7.043zm-.013 9.518c-1.536 0-2.714-.966-2.714-3.098 0-2.277 1.205-3.455 2.714-3.455 1.483 0 2.568.9 2.568 3.283 0 2.436-1.178 3.27-2.568 3.27zM38.8 3.693a2.04 2.04 0 0 0 .887.212c.728 0 1.297-.344 1.721-1.033a2.08 2.08 0 0 0 .265-1.006 2.03 2.03 0 0 0-.238-.953 1.61 1.61 0 0 0-.715-.675A1.69 1.69 0 0 0 39.859 0c-.331 0-.662.093-.98.278s-.556.45-.741.781c-.172.291-.265.635-.265 1.006a1.86 1.86 0 0 0 .238.927c.159.291.397.53.688.702z"
                  fill={`${active === "yemek" ? "#FFD300" : "#f4f2fd"}`}
                />
                <g fill="#f4f2fd">
                  <path d="M81.942 9.429c0-2.767-2.264-4.567-5.56-4.567-3.137 0-6.42 2.25-6.42 7.281 0 3.839 2.317 6.672 6.328 6.672 2.264 0 4.739-1.284 5.361-2.171 0 0-.424-1.655-1.602-1.655-.622 0-1.072.238-1.575.45-.529.212-1.152.41-1.959.41-1.125 0-3.045-.45-3.045-2.859 0 0 .9.265 2.965.265 4.435 0 5.507-1.88 5.507-3.826zm-5.427-1.575c1.522 0 2.25.834 2.25 1.589 0 .9-.807 1.469-2.264 1.469-2.118 0-2.925-.291-2.925-.304 0-1.284 1.006-2.753 2.939-2.753zm-9.214.08a25.31 25.31 0 0 1-.953 2.992l-1.165 2.793-1.099 2.33-.781 1.575-1.456 2.714c-.437.728-.86 1.297-1.258 1.734-.41.437-.821.741-1.231.94-.41.185-.86.291-1.337.291-.516 0-.94-.119-1.244-.357-.318-.238-.477-.503-.477-.781v-.847h1.072c.265 0 .516-.026.741-.093.225-.053.463-.185.715-.397s.516-.53.807-.953.622-1.006 1.006-1.734c-.516-.794-1.033-1.708-1.562-2.714l-1.483-3.164L56.354 8.9a25.52 25.52 0 0 1-.847-3.362h1.297c.463 0 .794.146.993.437a3.13 3.13 0 0 1 .41.913l.582 2.158.821 2.356 1.019 2.37c.371.781.768 1.522 1.191 2.197l1.125-2.264 1.138-2.793.953-2.873c.278-.953.477-1.787.583-2.528h.9c.305 0 .556.066.755.212s.305.41.305.808c0 .132-.04.357-.106.662l-.172.741z" />
                  <path d="M58.021 23.951c-.675 0-1.218-.172-1.641-.49-.596-.45-.728-.94-.728-1.284v-1.483h1.708a2.13 2.13 0 0 0 .556-.066l.04-.013c.093-.026.238-.079.45-.265.199-.159.424-.437.688-.821a15.54 15.54 0 0 0 .794-1.337l-1.39-2.449c-.516-.966-1.006-2.025-1.509-3.217l-1.271-3.415c-.371-1.112-.662-2.277-.861-3.442l-.132-.755h2.065c.86 0 1.297.384 1.522.715l.013.013c.238.371.397.741.49 1.099v.013c.132.622.331 1.337.569 2.105l.807 2.317 1.006 2.33.583 1.152.569-1.205 1.125-2.753.94-2.833c.278-.966.463-1.774.569-2.436l.079-.556h1.456c.45 0 .834.119 1.138.331.371.278.569.715.569 1.324 0 .172-.04.41-.119.794l-.185.768a25.57 25.57 0 0 1-.98 3.058l-1.178 2.833-.119.252-.993 2.105-.265.516-.516 1.046-1.483 2.78c-.437.715-.887 1.337-1.337 1.84-.45.49-.927.847-1.43 1.085l-.013.013c-.49.212-1.033.331-1.589.331zm-1.072-1.986v.212c0 .053.053.146.225.265.199.159.49.225.861.225s.728-.079 1.072-.225c.344-.172.702-.437 1.033-.794.384-.424.781-.98 1.178-1.628.463-.768.94-1.668 1.43-2.661l.53-1.072.252-.516.98-2.065.119-.238 1.152-2.753c.384-.98.688-1.933.927-2.912v-.026a9.71 9.71 0 0 0 .159-.702l.093-.53c0-.225-.053-.291-.053-.291-.079-.053-.199-.079-.371-.079h-.357a20.38 20.38 0 0 1-.516 2.065l-.966 2.912-1.152 2.833L62.39 16.3l-.529.953-.582-.913c-.424-.662-.834-1.43-1.231-2.264l-1.032-2.409-.834-2.396-.596-2.197c-.053-.225-.159-.45-.318-.702-.026-.04-.119-.146-.463-.146h-.516l.675 2.528a34.31 34.31 0 0 0 1.231 3.309l1.456 3.111 1.536 2.661.199.318-.172.331-1.046 1.8c-.344.49-.636.834-.927 1.086-.331.278-.635.45-.966.529-.265.079-.569.119-.9.119h-.424v-.053zm44.121-3.666c-.41 0-.754-.132-1.019-.41s-.397-.662-.397-1.165v-5.586c0-1.324-.238-2.277-.715-2.846s-1.138-.847-2.012-.847c-1.046 0-1.8.278-2.264.847s-.702 1.496-.702 2.767V18.3h-.728c-.516 0-.887-.132-1.112-.41s-.331-.662-.331-1.165v-5.586c0-1.152-.238-2.052-.728-2.714-.49-.649-1.191-.98-2.105-.98-.953 0-1.655.291-2.131.874s-.715 1.522-.715 2.82v7.175h-.688c-.463 0-.821-.132-1.085-.384-.265-.265-.397-.662-.397-1.191v-5.864c0-.728.119-1.416.344-2.078s.556-1.244.993-1.734c.437-.503.98-.887 1.615-1.178.649-.291 1.377-.437 2.197-.437.953 0 1.734.199 2.383.596.635.397 1.152.966 1.549 1.708A4.79 4.79 0 0 1 94.69 6.08c.702-.424 1.469-.622 2.303-.622 1.575 0 2.78.463 3.601 1.403s1.231 2.356 1.231 4.249v7.241h-.755v-.053z" />
                  <path d="M102.433 18.961h-1.972v-.132a1.76 1.76 0 0 1-.847-.516c-.371-.397-.569-.927-.569-1.588v-5.586c0-1.165-.199-2.012-.569-2.462-.357-.424-.847-.635-1.549-.635-.86 0-1.456.199-1.787.622-.371.45-.569 1.284-.569 2.383v7.85h-1.337c-.715 0-1.244-.212-1.588-.635-.318-.384-.463-.887-.463-1.549v-5.586c0-1.033-.199-1.8-.609-2.356-.371-.49-.9-.728-1.615-.728-.755 0-1.297.212-1.668.649-.384.463-.583 1.284-.583 2.436v7.784h-1.284c-.609 0-1.112-.185-1.509-.556l-.013-.013c-.384-.384-.569-.927-.569-1.615v-5.864a7.43 7.43 0 0 1 .371-2.277c.251-.741.622-1.403 1.112-1.946.477-.543 1.086-.993 1.814-1.324s1.549-.49 2.449-.49c1.059 0 1.946.225 2.701.688a4.94 4.94 0 0 1 1.258 1.152 5.37 5.37 0 0 1 1.324-1.112c.781-.477 1.655-.715 2.621-.715 1.761 0 3.124.543 4.05 1.615.914 1.046 1.377 2.608 1.377 4.646v7.863h.026zm-17.672-1.456c.159.146.371.212.662.212h.079V11.15c0-1.456.278-2.502.847-3.203.596-.728 1.469-1.099 2.595-1.099 1.112 0 1.972.41 2.595 1.218.569.781.847 1.774.847 3.084v5.586c0 .357.066.622.199.781.119.159.41.185.635.185h.119V11.07c0-1.403.278-2.462.834-3.151.582-.715 1.496-1.072 2.74-1.072 1.046 0 1.88.357 2.475 1.059.582.688.86 1.747.86 3.23v5.586c0 .344.08.582.225.741a.75.75 0 0 0 .583.225h.145v-6.579c0-1.734-.357-3.031-1.085-3.852-.702-.808-1.734-1.191-3.151-1.191-.741 0-1.39.172-1.986.53-.609.371-1.099.86-1.456 1.456l-.543.927-.503-.94c-.344-.649-.794-1.138-1.337-1.483-.556-.344-1.231-.503-2.065-.503-.741 0-1.377.119-1.946.384-.583.265-1.033.596-1.403 1.019a4.27 4.27 0 0 0-.874 1.536 5.72 5.72 0 0 0-.318 1.88v5.864c.013.357.093.622.225.768zm31.453-8.076c0-2.767-2.263-4.567-5.559-4.567-3.138 0-6.421 2.25-6.421 7.281 0 3.839 2.317 6.672 6.328 6.672 2.264 0 4.739-1.284 5.361-2.171 0 0-.423-1.655-1.602-1.655-.622 0-1.072.238-1.575.45-.529.212-1.152.41-1.959.41-1.125 0-3.045-.45-3.045-2.859 0 0 .9.265 2.966.265 4.447 0 5.506-1.88 5.506-3.826zm-5.427-1.575c1.522 0 2.25.834 2.25 1.589 0 .9-.807 1.469-2.263 1.469-2.118 0-2.926-.291-2.926-.305.013-1.284 1.019-2.753 2.939-2.753zm10.735-4.782v7.874c1.273-1.66 2.52-3.344 4.03-4.792.787-.736 1.573-.861 2.621-.861h1.884v.125c-.936.786-3.993 4.255-5.353 5.99l3.257 3.843c1.198 1.198 1.734 1.448 2.545 1.71-.337 1.048-.886 1.61-2.221 1.61-.736 0-1.585-.337-2.159-.911-1.684-1.735-3.157-3.694-4.604-5.628v6.439l-1.048.025c-1.523.025-2.247-.786-2.247-2.321V.888h1.049c1.584 0 2.246.911 2.246 2.184z" />
                </g>
              </svg>
            </a>
          </li>
          <li
            className={`nav-link ${active === "buyuk" ? "active" : ""}`}
            onClick={() => setActive("buyuk")}
          >
            <a href="#">
              <svg
                width="81.33"
                height="16"
                viewBox="0 0 122 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  d="M20.643 7.688c1.51 0 2.234.824 2.234 1.573 0 .886-.799 1.46-2.247 1.46-2.097 0-2.895-.3-2.895-.3 0-1.273.999-2.733 2.908-2.733zm5.379 1.56c0-2.733-2.246-4.53-5.516-4.53-3.108 0-6.365 2.234-6.365 7.214 0 3.807 2.297 6.615 6.278 6.615 2.234 0 4.693-1.273 5.317-2.147 0 0-.424-1.635-1.585-1.635-.611 0-1.061.237-1.56.449a4.95 4.95 0 0 1-1.934.399c-1.111 0-3.02-.449-3.02-2.833 0 0 .899.262 2.945.262 4.381-.012 5.441-1.86 5.441-3.794zm8.175 6.378c-1.51 0-2.296-1.273-2.434-1.822-.172-.694-.256-1.407-.25-2.122l.025-4.094h1.098c.886 0 1.573-.262 2.047-.774s.724-1.211.724-2.084h-3.869l-.025-1.822.012-1.398.037-.849a4.52 4.52 0 0 1 .062-.549c-1.173 0-2.072.25-2.683.749s-.924 1.323-.924 2.484l-.025 9.086c0 3.719 1.772 6.153 5.154 6.153 1.672 0 2.895-.899 2.895-2.259a2.71 2.71 0 0 0-.112-.886 7.45 7.45 0 0 1-1.735.187zm8.486.174c-.749 0-1.236-.549-1.236-1.435V7.813l.013-1.398.037-.849a5.21 5.21 0 0 1 .062-.549c-1.198 0-2.097.25-2.708.749s-.924 1.323-.924 2.484l-.025 6.677c0 2.384 1.535 3.707 3.469 3.632 1.223-.05 2.272-.624 2.272-1.909a5.34 5.34 0 0 0-.087-.961c-.285.075-.579.112-.874.112zM38.789 3.707a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.722-1.036.174-.308.264-.657.262-1.011.003-.331-.079-.658-.237-.949a1.64 1.64 0 0 0-.711-.686A1.66 1.66 0 0 0 39.85 0a1.87 1.87 0 0 0-.974.287 1.94 1.94 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.86 1.86 0 0 0 .237.936 1.79 1.79 0 0 0 .674.686zm12.568 1.335a10.25 10.25 0 0 0-2.209.25 5.04 5.04 0 0 0-2.009.936 4.94 4.94 0 0 0-1.46 1.922c-.374.824-.562 1.872-.562 3.158v3.757c0 1.161.15 2.234.849 2.758.761.574 1.647.599 2.821.599-.025-.112-.037-.449-.062-.674a7.66 7.66 0 0 1-.038-.849l-.012-1.398v-4.818c0-1.136.187-2.596 2.184-2.758 1.123-.1 2.122-.524 2.122-1.747-.002-.387-.069-.771-.2-1.136h-1.423zM6.215 14.24c-1.535 0-2.708-.973-2.708-3.108 0-2.271 1.198-3.457 2.708-3.457 1.485 0 2.571.899 2.571 3.282 0 2.446-1.173 3.282-2.571 3.282zm.025-9.523C2.147 4.718 0 7.588 0 11.083c0 3.233 1.972 6.253 5.554 6.253 1.86 0 2.933-.786 3.207-1.023v1.622c0 1.86-.724 3.095-2.596 3.095-.899 0-1.573-.25-2.197-.537-.549-.262-.961-.574-1.51-.574-1.398 0-1.785 1.722-1.772 1.735C1.735 23.002 4.131 24 6.14 24c3.956 0 6.14-2.309 6.14-6.889v-5.354c-.012-4.181-1.86-7.039-6.041-7.039z"
                  fill={`${active === "buyuk" ? "#FFD300" : "#f4f2fd"}`}
                />
                <path
                  d="M71.775 3.707a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.722-1.036.174-.308.264-.657.262-1.011.003-.331-.079-.658-.237-.949a1.64 1.64 0 0 0-.711-.686A1.66 1.66 0 0 0 72.836 0a1.87 1.87 0 0 0-.973.287 1.94 1.94 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.87 1.87 0 0 0 .237.936 1.97 1.97 0 0 0 .674.686zm5.28 0a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.722-1.036.174-.308.264-.657.262-1.011.003-.331-.079-.658-.237-.949-.161-.296-.41-.536-.711-.686A1.66 1.66 0 0 0 78.115 0a1.87 1.87 0 0 0-.973.287 1.94 1.94 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.86 1.86 0 0 0 .237.936 1.79 1.79 0 0 0 .674.686zm20.954 0a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.723-1.036.174-.308.264-.657.262-1.011a1.95 1.95 0 0 0-.237-.949c-.161-.296-.41-.536-.712-.686A1.66 1.66 0 0 0 99.07 0a1.87 1.87 0 0 0-.974.287 1.95 1.95 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.86 1.86 0 0 0 .237.936 1.79 1.79 0 0 0 .674.686zm5.267 0a1.97 1.97 0 0 0 .886.212c.724 0 1.298-.349 1.723-1.036.173-.308.264-.657.262-1.011a1.94 1.94 0 0 0-.238-.949 1.64 1.64 0 0 0-.711-.686 1.66 1.66 0 0 0-.861-.237c-.345.004-.682.104-.974.287a1.95 1.95 0 0 0-.736.786 1.97 1.97 0 0 0-.262 1.011 1.85 1.85 0 0 0 .236.934 1.84 1.84 0 0 0 .675.688zM61.142 7.638c-1.66 0-2.908 1.635-2.908 3.694 0 3.033 1.298 4.281 3.257 4.281 1.635 0 2.821-1.572 2.821-3.694-.013-3.207-1.161-4.281-3.17-4.281zm0 10.896c-3.382 0-6.215-2.771-6.215-6.727V.612h1.123c1.273 0 2.159.736 2.159 2.271v3.844c.661-.949 1.785-2.009 3.569-2.009 3.357 0 5.928 2.746 5.928 6.627 0 3.981-2.546 7.189-6.565 7.189zm8.449-6.216V7.364c0-1.548.811-2.346 2.721-2.346h.587v7.413c0 2.246.948 3.183 2.296 3.183 1.498 0 2.671-.974 2.671-3.407V7.364c0-1.548.836-2.346 2.721-2.346h.611v7.513c0 3.844-2.571 5.991-5.828 5.991-3.844.012-5.778-2.097-5.778-6.203zm26.184 0V7.364c0-1.548.811-2.346 2.721-2.346h.587v7.413c0 2.246.948 3.183 2.296 3.183 1.498 0 2.671-.974 2.671-3.407V7.364c0-1.548.836-2.346 2.721-2.346h.611v7.513c0 3.844-2.571 5.991-5.828 5.991-3.844.012-5.779-2.097-5.779-6.203zM85.342 22.515c-1.223 0-2.296-.811-2.296-2.034v-.636l1.86-.125c1.198-.075 1.61-.562 2.321-2.421-1.735-2.621-4.231-9.173-4.68-12.281h1.735c.449-.007.887.144 1.236.427s.588.68.674 1.121c.462 2.546 1.448 5.292 2.646 7.613 1.073-2.471 2.271-6.465 2.571-9.148h1.423c1.048 0 1.548.462 1.548 1.548 0 1.398-2.296 7.413-2.908 8.836-2.446 5.753-3.744 7.101-6.128 7.101zm27.294-19.719v7.875c1.273-1.66 2.521-3.345 4.032-4.793.786-.736 1.572-.861 2.621-.861h1.884v.125c-.936.786-3.994 4.256-5.354 5.991l3.257 3.844c1.198 1.198 1.735 1.448 2.546 1.71-.337 1.048-.886 1.61-2.221 1.61a3.2 3.2 0 0 1-2.159-.911c-1.685-1.735-3.158-3.694-4.606-5.629v6.44l-1.048.025c-1.523.025-2.246-.786-2.246-2.321V.612h1.048c1.585 0 2.246.911 2.246 2.184z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
          <li
            className={`nav-link ${active === "su" ? "active" : ""}`}
            onClick={() => setActive("su")}
          >
            <a href="#">
              <svg
                width="52.5"
                height="16"
                viewBox="0 0 210 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M69.3916 24.6615C69.3916 17.3728 63.4009 12.5803 54.6812 12.5803C46.3942 12.5803 37.7077 18.5377 37.7077 31.8169C37.7077 41.9678 43.8315 49.4561 54.4482 49.4561C60.4056 49.4561 66.962 46.0614 68.6261 43.7317C68.6261 43.7317 67.4945 39.3718 64.3994 39.3718C62.7686 39.3718 61.5704 40.0042 60.2392 40.5699C58.8414 41.1357 57.2106 41.6349 55.0806 41.6349C52.1185 41.6349 47.0265 40.4368 47.0265 34.0801C47.0265 34.0801 49.4228 34.779 54.8809 34.779C66.5626 34.7457 69.3916 29.8201 69.3916 24.6615ZM55.0473 20.5013C59.0743 20.5013 61.0047 22.6979 61.0047 24.6947C61.0047 27.0577 58.8747 28.5887 55.014 28.5887C49.4228 28.5887 47.2928 27.7899 47.2928 27.7899C47.2928 24.3952 49.9553 20.5013 55.0473 20.5013Z"
                    fill={`${active === "su" ? "#FFD300" : "#f4f2fd"}`}
                  />
                  <path
                    d="M91.1908 41.6682C87.1638 41.6682 85.0671 38.2735 84.701 36.8091C84.3016 35.3448 84.0354 33.2813 84.0354 31.1513L84.1019 20.235H87.0307C89.3936 20.235 91.2241 19.5361 92.4888 18.1716C93.7868 16.7738 94.4191 14.9433 94.4191 12.6136H84.1019L84.0354 7.75453C84.0354 6.22359 84.0354 4.9589 84.0686 4.02702C84.1019 3.06187 84.1352 2.32968 84.1685 1.76389C84.2018 1.16483 84.2683 0.665609 84.3349 0.299515C81.2064 0.299515 78.8102 0.965141 77.1794 2.29639C75.5486 3.62765 74.7166 5.82422 74.7166 8.91938L74.65 33.1482C74.65 43.066 79.376 49.5559 88.3952 49.5559C92.8549 49.5559 96.1165 47.1596 96.1165 43.532C96.1165 42.234 95.9501 41.5684 95.8169 41.169C95.0515 41.3354 93.5871 41.6682 91.1908 41.6682Z"
                    fill={`${active === "su" ? "#FFD300" : "#f4f2fd"}`}
                  />
                  <path
                    d="M113.822 42.1341C111.825 42.1341 110.527 40.6698 110.527 38.3068V20.8341C110.527 19.3032 110.527 18.0385 110.561 17.1066C110.594 16.1414 110.627 15.4092 110.66 14.8435C110.727 14.2444 110.76 13.7452 110.827 13.3791C107.632 13.3791 105.236 14.0447 103.605 15.376C101.974 16.7072 101.142 18.9038 101.142 21.9989L101.075 39.8045C101.075 46.1612 105.169 49.689 110.328 49.4893C113.589 49.3562 116.385 47.8253 116.385 44.3973C116.385 42.9662 116.152 41.8346 116.152 41.8346C115.386 42.001 114.854 42.1341 113.822 42.1341Z"
                    fill={`${active === "su" ? "#FFD300" : "#f4f2fd"}`}
                  />
                  <path
                    d="M103.438 9.88455C104.171 10.2506 104.969 10.4503 105.801 10.4503C107.732 10.4503 109.263 9.51846 110.394 7.68799C110.86 6.85595 111.093 5.95736 111.093 4.9922C111.093 4.0936 110.893 3.26157 110.461 2.46282C110.028 1.66407 109.396 1.065 108.564 0.632345C107.832 0.199688 107.066 0 106.267 0C105.369 0 104.503 0.266251 103.671 0.765471C102.839 1.26469 102.174 1.9636 101.708 2.86219C101.242 3.66095 101.009 4.55954 101.009 5.55798C101.009 6.45658 101.209 7.28861 101.641 8.05408C102.041 8.78627 102.64 9.41862 103.438 9.88455Z"
                    fill={`${active === "su" ? "#FFD300" : "#f4f2fd"}`}
                  />
                  <path
                    d="M136.953 13.4457C134.989 13.4457 133.025 13.6786 131.062 14.1113C129.098 14.544 127.301 15.376 125.704 16.6074C124.106 17.8388 122.808 19.5362 121.81 21.7327C120.811 23.9293 120.312 26.7249 120.312 30.1529V40.1706C120.312 43.2658 120.711 46.1279 122.575 47.5258C124.605 49.0567 126.968 49.1233 130.097 49.1233C130.03 48.8237 129.997 47.9251 129.93 47.3261C129.864 46.7603 129.83 45.9948 129.83 45.0629C129.797 44.0978 129.797 42.8664 129.797 41.3354V28.4888C129.797 25.4602 130.296 21.5663 135.621 21.1337C138.617 20.8674 141.279 19.7359 141.279 16.4743C141.279 15.7088 141.113 14.2777 140.747 13.4457H136.953Z"
                    fill={`${active === "su" ? "#FFD300" : "#f4f2fd"}`}
                  />
                  <path
                    d="M16.6407 12.5803C5.72439 12.5803 0 20.235 0 29.5538C0 38.1737 5.25845 46.2278 14.8102 46.2278C19.7691 46.2278 22.6313 44.131 23.3635 43.4987V47.8253C23.3635 52.7842 21.4332 56.079 16.441 56.079C14.0447 56.079 12.2475 55.4134 10.5835 54.6479C9.11908 53.949 8.0208 53.117 6.55642 53.117C2.82891 53.117 1.79719 57.7098 1.83047 57.7431C4.6261 61.3375 11.0161 64 16.3744 64C26.9246 64 32.7488 57.8429 32.7488 45.6287C32.7488 45.6287 32.7488 33.3146 32.7488 31.351C32.7155 20.2018 27.7899 12.5803 16.6407 12.5803ZM16.5741 37.974C12.4805 37.974 9.35205 35.378 9.35205 29.6869C9.35205 23.6297 12.5471 20.468 16.5741 20.468C20.5346 20.468 23.4301 22.8643 23.4301 29.221C23.4301 35.7441 20.3016 37.974 16.5741 37.974Z"
                    fill={`${active === "su" ? "#FFD300" : "#f4f2fd"}`}
                  />
                  <path
                    d="M178.588 32.8487V19.636C178.588 15.5091 180.751 13.3791 185.843 13.3791H187.407V33.1482C187.407 39.1388 189.937 41.6349 193.531 41.6349C197.525 41.6349 200.653 39.039 200.653 32.5491V19.636C200.653 15.5091 202.883 13.3791 207.908 13.3791H209.539V33.4144C209.539 43.6651 202.683 49.3895 193.997 49.3895C183.746 49.4228 178.588 43.7982 178.588 32.8487Z"
                    fill="white"
                  />
                  <path
                    d="M158.719 49.6891C152.195 49.6891 147.336 46.3277 147.336 42.7V38.6729H147.669C149.566 40.4369 154.126 42.0344 158.319 42.0344C162.679 42.0344 164.776 40.7697 164.776 38.1404C164.776 36.1103 163.511 35.1118 157.387 34.2465C149.899 33.1815 146.271 30.2195 146.271 24.8279C146.271 18.1717 152.262 12.5138 161.348 12.5138C169.369 12.5138 172.664 16.674 172.664 20.0687V23.4301H172.331C170.5 21.5996 166.407 20.1352 162.18 20.1352C156.788 20.1352 155.058 21.766 155.058 24.0957C155.058 25.8596 156.123 26.5918 162.18 27.5903C169.568 28.7884 173.496 32.0167 173.496 37.6745C173.529 45.2294 168.27 49.6891 158.719 49.6891Z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>
          </li>
          <li
            className={`nav-link ${active === "carsi" ? "active" : ""}`}
            onClick={() => setActive("carsi")}
          >
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="16"
                viewBox="0 0 1478 328"
                fill="none"
              >
                <path
                  d="M1464.13 215.78c-10.2 0-16.84-7.48-16.84-19.56v-89.28l.17-19.05.51-11.56c.34-3.06.51-5.61.85-7.48-16.33 0-28.57 3.4-36.9 10.2-8.34 6.8-12.59 18.03-12.59 33.85l-.34 90.98c0 32.48 20.92 50.51 47.28 49.49 16.67-.68 30.95-8.5 30.95-26.02 0-7.31-1.19-13.1-1.19-13.1-3.91.85-6.63 1.53-11.9 1.53z"
                  fill="#fff"
                />

                <g fill={`${active === "carsi" ? "#FFD300" : "#f4f2fd"}`}>
                  <path d="M355.35 126.5c0-37.24-30.61-61.73-75.17-61.73-42.34 0-86.73 30.44-86.73 98.3 0 51.87 31.29 90.13 85.54 90.13 30.44 0 63.94-17.35 72.45-29.25 0 0-5.78-22.28-21.6-22.28-8.33 0-14.45 3.23-21.26 6.13-7.14 2.89-15.47 5.44-26.36 5.44-15.13 0-41.16-6.12-41.16-38.6 0 0 12.24 3.57 40.13 3.57 59.7-.18 74.16-25.35 74.16-51.71zm-73.3-21.25c20.58 0 30.44 11.22 30.44 21.43 0 12.08-10.88 19.9-30.61 19.9-28.57 0-39.46-4.08-39.46-4.08.01-17.36 13.62-37.25 39.63-37.25zM466.74 213.4c-20.58 0-31.29-17.35-33.16-24.83-2.04-7.48-3.4-18.02-3.4-28.91l.34-55.78h14.96c12.07 0 21.43-3.57 27.89-10.54 6.63-7.14 9.86-16.5 9.86-28.4h-52.72l-.34-24.83.17-19.05.51-11.57c.17-3.06.51-5.61.85-7.48-15.98 0-28.23 3.4-36.56 10.2s-12.59 18.03-12.59 33.84l-.34 123.8c0 50.67 24.15 83.84 70.24 83.84 22.79 0 39.46-12.24 39.46-30.78 0-6.63-.85-10.04-1.53-12.08-3.92.87-11.4 2.57-23.64 2.57zm115.64 2.38c-10.2 0-16.84-7.48-16.84-19.56v-89.28l.17-19.05.51-11.56c.34-3.06.51-5.61.85-7.48-16.33 0-28.57 3.4-36.9 10.2s-12.59 18.03-12.59 33.85l-.34 90.98c0 32.48 20.92 50.51 47.28 49.49 16.67-.68 30.95-8.5 30.95-26.02 0-7.31-1.19-13.1-1.19-13.1-3.91.85-6.63 1.53-11.9 1.53zM529.32 51c3.74 1.87 7.82 2.89 12.07 2.89 9.86 0 17.68-4.76 23.47-14.11 2.38-4.25 3.57-8.84 3.57-13.78 0-4.59-1.02-8.84-3.23-12.92s-5.44-7.14-9.7-9.35C551.76 1.52 547.85.5 543.77.5c-4.59 0-9.01 1.36-13.26 3.91s-7.65 6.12-10.03 10.71c-2.38 4.08-3.57 8.68-3.57 13.77 0 4.59 1.02 8.84 3.23 12.75 2.04 3.75 5.1 6.98 9.18 9.36z" />
                  <use
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#B"
                  />
                </g>
                <use
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#B"
                  x="488.15"
                  fill="#fff"
                />
                <path
                  d="M85.81 64.77C30.03 64.77.78 103.88.78 151.5c0 44.04 26.87 85.2 75.68 85.2 25.34 0 39.96-10.72 43.7-13.95v22.11c0 25.34-9.86 42.17-35.37 42.17-12.24 0-21.43-3.4-29.93-7.31-7.48-3.57-13.09-7.82-20.57-7.82-19.05 0-24.32 23.47-24.15 23.64 14.29 18.37 46.94 31.97 74.31 31.97 53.91 0 83.67-31.46 83.67-93.87v-72.95c-.18-56.97-25.35-95.92-82.31-95.92zm-.34 129.76c-20.92 0-36.9-13.26-36.9-42.34 0-30.95 16.32-47.11 36.9-47.11 20.24 0 35.03 12.25 35.03 44.73 0 33.32-15.99 44.72-35.03 44.72z"
                  fill={`${active === "carsi" ? "#FFD300" : "#f4f2fd"}`}
                />
                <path
                  d="M1051.32 83.35c-6.77-6.14-15.15-10.79-24.92-13.84-10.09-3.14-21.51-4.74-33.97-4.74-13.01 0-24.36 1.27-33.72 3.77-9.17 2.46-16.76 5.75-22.56 9.79-5.61 3.9-9.77 8.24-12.38 12.87-2.57 4.56-3.82 9.16-3.82 14.04v10.25c.52-.38 1.05-.75 1.57-1.11 4.05-2.83 8.73-5.24 13.91-7.15 5.04-1.86 11.03-3.35 17.81-4.44 6.73-1.08 14.88-1.63 24.22-1.63 14.25 0 24.6 1.4 31.65 4.29 8.69 3.57 13.47 11.31 13.47 21.8v14.76h-16.25c-33.24 0-57.6 5-72.39 14.85-14.1 9.4-20.95 23.24-20.95 42.31 0 9.61 2.13 17.47 6.5 24.03 4.53 6.79 10.37 12.43 17.38 16.76 7.24 4.47 15.4 7.82 24.27 9.95 9.07 2.18 18.07 3.29 26.75 3.29 16.78 0 30.93-1.34 42.08-3.99 10.46-2.48 18.94-6.77 25.21-12.73 6.22-5.92 10.73-14.08 13.4-24.26 2.85-10.87 4.3-24.86 4.3-41.58v-29.57c0-13.2-1.94-24.76-5.77-34.33-3.74-9.41-9.06-17.28-15.79-23.39zm-27.33 107.12c0 11.03-3.13 19-9.31 23.72-5.61 4.28-12.28 6.45-19.81 6.45-10.95 0-18.86-2-24.2-6.12-3.99-3.08-8.76-8.91-8.76-19.17 0-8.97 4.02-16.02 11.62-20.38 6.57-3.77 16.5-5.61 30.38-5.61h20.08v21.11zm-190.82 78.22c-3.74-2.21-7.65-3.23-11.73-3.23-4.59 0-9.01 1.36-13.26 3.91s-7.65 6.12-10.03 10.71c-2.38 4.08-3.57 8.67-3.57 13.77 0 4.59 1.02 8.84 3.23 12.75 2.04 3.74 5.1 6.98 9.19 9.35 3.74 1.87 7.82 2.89 12.07 2.89 9.86 0 17.69-4.76 23.47-14.11a27.72 27.72 0 0 0 3.57-13.77c0-4.59-1.02-8.84-3.23-12.93-2.23-4.07-5.46-7.13-9.71-9.34zm-27.52-149.42c10.02-8.82 24.23-13.29 42.24-13.29 10.08 0 19.63 1.54 28.38 4.59a95.2 95.2 0 0 1 4.97 1.88c2.04.84 4.26-.66 4.26-2.86v-6.86c0-5.18-1.16-9.84-3.54-14.22-2.47-4.53-5.94-8.6-10.32-12.09-4.52-3.59-9.8-6.46-15.69-8.53-5.9-2.07-12.39-3.11-19.27-3.11-16.06 0-30.44 2.59-42.74 7.71-12.26 5.1-22.68 12.05-30.97 20.67-8.31 8.63-14.7 18.8-19.02 30.25-4.36 11.54-6.56 23.93-6.56 36.82 0 14.01 2.31 26.95 6.88 38.46 4.52 11.42 10.94 21.23 19.07 29.14 8.17 7.96 18.07 14.24 29.41 18.66 1.98.77 4.01 1.47 6.07 2.09 7.5 2.25 13.73 3.48 23.17 4.29 2.86.24 5.77.33 8.73.33 8.1 0 15.63-1.12 22.38-3.34 6.67-2.19 12.45-5.17 17.17-8.86 4.63-3.62 8.34-7.89 11.03-12.67 2.59-4.6 3.85-9.34 3.85-14.49v-4.9c0-2.13-2.1-3.62-4.11-2.91a102.77 102.77 0 0 1-7.68 2.38c-7.9 2.14-17.53 3.22-28.62 3.22-16.44 0-29.75-4.56-39.54-13.56-9.97-9.15-15.03-23.19-15.03-41.72-.01-15.56 5.2-28.03 15.48-37.08zm505.77 149.42c-3.74-2.21-7.65-3.23-11.73-3.23-4.59 0-9.02 1.36-13.27 3.91s-7.65 6.12-10.03 10.71c-2.38 4.08-3.57 8.67-3.57 13.77 0 4.59 1.02 8.84 3.23 12.75 2.04 3.74 5.1 6.98 9.19 9.35 3.74 1.87 7.82 2.89 12.07 2.89 9.86 0 17.69-4.76 23.47-14.11a27.72 27.72 0 0 0 3.57-13.77c0-4.59-1.02-8.84-3.23-12.93-2.22-4.07-5.45-7.13-9.7-9.34zm46-108.31c-8.8-7.96-20.64-13.18-35.21-15.5-9.98-1.62-18.1-3.1-24.13-4.4-6.32-1.36-11.03-2.65-14.38-3.95-4.52-1.74-7.4-3.76-9.04-6.34-1.52-2.38-2.29-5.2-2.29-8.38 0-4.42 1.76-10.79 10.16-16.04 5.87-3.67 15.19-5.38 29.32-5.38 13.56 0 25.74 1.62 36.2 4.81 6.4 1.96 12.21 4.28 17.36 6.94v-8.72c0-12.01-4.9-21.11-14.99-27.8-10.84-7.19-26.39-10.84-46.21-10.84-10.2 0-20.33 1.38-30.1 4.09-9.61 2.67-18.31 6.72-25.84 12.02-7.37 5.19-13.36 11.7-17.81 19.37-4.34 7.46-6.54 16.47-6.54 26.76 0 13.4 3.59 23.22 10.98 30.03 7.72 7.11 19.69 11.9 35.54 14.22 10.01 1.4 18.09 2.71 24.01 3.89 6.38 1.28 11.2 2.7 14.72 4.32 4.36 2.02 7.3 4.41 8.98 7.34 1.52 2.66 2.28 5.67 2.28 8.94 0 4.96-1.76 11.9-10.13 16.83-5.71 3.37-14.7 4.94-28.3 4.94-14.35 0-26.83-1.76-37.07-5.22-6.08-2.05-11.59-4.4-16.49-7.02v7.83c0 5.97 1.09 11.46 3.24 16.34 2.07 4.71 5.31 8.62 9.92 11.98 4.83 3.52 11.4 6.36 19.53 8.45 4.36 1.12 9.3 1.86 14.72 2.48 6.71.77 13.04 1.09 23.11.62 21.56-1.02 38.75-6.41 51.13-16.39 13.35-10.76 19.84-25.03 19.84-43.62-.01-14.32-4.1-24.98-12.51-32.6z"
                  fill="#fff"
                />
                <defs>
                  <path
                    id="B"
                    d="M700.57 69.19c-10.03 0-20.07 1.19-30.1 3.4s-19.22 6.46-27.38 12.75-14.8 14.96-19.89 26.19c-5.1 11.22-7.65 25.51-7.65 43.02v51.19c0 15.82 2.04 30.44 11.56 37.58 10.38 7.82 22.45 8.16 38.43 8.16-.34-1.53-.51-6.12-.85-9.19-.34-2.89-.51-6.8-.51-11.56-.17-4.93-.17-11.22-.17-19.05v-65.64c0-15.47 2.55-35.37 29.76-37.58 15.31-1.36 28.91-7.14 28.91-23.81 0-3.91-.85-11.22-2.72-15.47h-19.39v.01z"
                  />
                </defs>
              </svg>
            </a>
          </li>
        </ul>
        <ul className=" gap-5 self-center hidden md:flex">
          <li>
            <button className="nav-btn ">
              <svg
                data-testid="icon"
                name="global"
                size="16"
                width="16"
                height="16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="hidden md:block"
              >
                <path
                  fill="#dbdbff"
                  d="M16 0c-8.873 0-16 7.127-16 16s7.127 16 16 16c8.873 0 16-7.127 16-16s-7.127-16-16-16zM28.945 14.545h-5.818c-0.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zM20.218 14.545h-8.436c0.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zM12.655 3.345c-2.182 3.345-3.491 7.127-3.782 11.2h-5.818c0.582-5.382 4.509-9.891 9.6-11.2zM3.055 17.455h5.818c0.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-0.436 3.927-1.891 7.709-4.364 10.764zM19.345 28.655c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-0.727 5.382-4.655 9.891-9.745 11.2z"
                  className="style__Path-sc-__sc-hqksj3-2 lcjQMU"
                ></path>
              </svg>
              <span className="hidden lg:block">Türkçe (TR)</span>
            </button>
          </li>
          <li>
            <button className="nav-btn">
              <svg
                data-testid="icon"
                name="profile"
                size="16"
                width="16"
                height="16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="hidden md:block"
              >
                <path
                  fill="#dbdbff"
                  d="M24 8.846c0 4.39-3.582 7.948-8 7.948s-8-3.559-8-7.948c0-4.39 3.582-7.948 8-7.948s8 3.558 8 7.948z M0.027 28.896c-0.207 1.16 0.83 2.206 2.116 2.206h27.713c1.327 0 2.324-1.048 2.116-2.206-1.204-6.696-7.884-10.511-15.974-10.511s-14.77 3.815-15.972 10.511h-0z"
                  className="style__Path-sc-__sc-hqksj3-2 lcjQMU"
                ></path>
              </svg>
              <span className="hidden lg:block">Giriş Yap</span>
            </button>
          </li>
          <li>
            <button className="nav-btn">
              <svg
                data-testid="icon"
                name="user-add"
                size="16"
                width="16"
                height="16"
                color="#DBDBFF"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="hidden md:block"
              >
                <path
                  fill="#DBDBFF"
                  d="M12 14c1.187 0 2.347-0.352 3.333-1.011s1.756-1.596 2.21-2.693c0.454-1.096 0.573-2.303 0.342-3.467s-0.803-2.233-1.642-3.072c-0.839-0.839-1.908-1.411-3.072-1.642s-2.37-0.113-3.467 0.341-2.033 1.223-2.693 2.21c-0.659 0.987-1.011 2.147-1.011 3.333 0 1.591 0.632 3.117 1.757 4.243s2.651 1.757 4.243 1.757zM12 18c3.183 0 6.235 1.264 8.485 3.515s3.515 5.303 3.515 8.485h-24c0-3.183 1.264-6.235 3.515-8.485s5.303-3.515 8.485-3.515v0zM28 10c0-0.53-0.211-1.039-0.586-1.414s-0.884-0.586-1.414-0.586c-0.53 0-1.039 0.211-1.414 0.586s-0.586 0.884-0.586 1.414v2h-2c-0.53 0-1.039 0.211-1.414 0.586s-0.586 0.884-0.586 1.414c0 0.53 0.211 1.039 0.586 1.414s0.884 0.586 1.414 0.586h2v2c0 0.53 0.211 1.039 0.586 1.414s0.884 0.586 1.414 0.586c0.53 0 1.039-0.211 1.414-0.586s0.586-0.884 0.586-1.414v-2h2c0.53 0 1.039-0.211 1.414-0.586s0.586-0.884 0.586-1.414c0-0.53-0.211-1.039-0.586-1.414s-0.884-0.586-1.414-0.586h-2v-2z"
                  className="style__Path-sc-__sc-hqksj3-2 lcjQMU"
                ></path>
              </svg>
              <span className="hidden lg:block">Kayıt Ol</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}