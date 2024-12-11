"use client";

import {
  signInWithGithub,
  signInWithGoogle,
} from "@/actions/server/google-login";

import { signup } from "@/actions/server/use-server/sign-up";
import { SignInButton } from "@/components/auth/sign-in-button";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState("");

  return (
    <div className="flex flex-col gap-6 justify-center items-center h-full max-w-sm mx-auto">
      <svg
        width="72"
        height="72"
        viewBox="0 0 1001 1001"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1000.16" height="1000.16" rx="234.412" fill="#00B6DF" />
        <path
          d="M205.111 270.25C208.947 270.25 211.017 272.319 211.32 276.458C211.623 280.901 211.724 285.444 211.623 290.088C211.522 294.732 211.522 299.325 211.623 303.868C211.724 313.459 211.774 323.05 211.774 332.641C211.774 342.232 211.774 351.823 211.774 361.414C211.774 362.626 212.279 363.231 213.288 363.231H214.046C248.169 353.842 271.49 332.49 284.009 299.174C285.524 295.337 286.685 291.501 287.492 287.665C288.401 283.727 289.36 279.74 290.369 275.701C290.874 273.884 291.53 272.521 292.338 271.612C293.146 270.704 294.559 270.25 296.578 270.25H321.717C323.433 270.25 324.897 270.603 326.108 271.31C327.32 272.016 327.926 273.379 327.926 275.398C327.926 276.307 327.875 276.963 327.774 277.367C324.241 294.631 318.183 310.834 309.602 325.978C301.02 341.122 289.814 354.246 275.983 365.351C273.358 367.573 270.632 369.642 267.805 371.56C265.08 373.378 262.253 375.195 259.325 377.012C258.618 377.315 258.265 377.82 258.265 378.526C258.265 378.93 259.729 381.252 262.657 385.492C265.685 389.632 269.572 394.982 274.317 401.545C279.062 408.107 284.161 415.123 289.612 422.594C295.165 429.964 300.516 437.132 305.665 444.098C310.813 451.064 315.255 457.071 318.991 462.119C322.726 467.066 325.149 470.347 326.26 471.963C326.866 472.77 327.471 473.729 328.077 474.84C328.784 475.95 329.137 477.061 329.137 478.171C329.137 479.989 328.128 481.099 326.108 481.503C324.089 481.806 322.474 481.957 321.262 481.957H291.884C289.966 481.957 288.35 481.15 287.038 479.534C284.11 476.001 281.233 472.366 278.406 468.631C275.68 464.795 272.904 461.009 270.077 457.273C264.827 450.307 259.577 443.341 254.328 436.375C249.179 429.409 243.98 422.392 238.73 415.325C235.903 411.59 233.127 407.855 230.401 404.119C227.776 400.283 225 396.547 222.072 392.913C221.567 392.408 221.163 392.156 220.86 392.156C219.851 392.156 218.639 392.307 217.226 392.61C215.812 392.812 214.55 393.014 213.44 393.216C212.329 393.418 211.774 394.074 211.774 395.184C211.774 404.372 211.724 413.559 211.623 422.746C211.623 431.832 211.572 440.918 211.471 450.004C211.37 454.345 211.37 458.737 211.471 463.179C211.572 467.621 211.471 471.963 211.168 476.203C210.865 480.342 208.796 482.412 204.959 482.412H178.61C174.47 482.412 172.401 480.292 172.401 476.051C172.401 470.6 172.502 465.148 172.704 459.696C172.905 454.144 173.057 448.641 173.158 443.19C173.461 419.969 173.612 396.901 173.612 373.983C173.612 351.874 173.461 329.865 173.158 307.957C173.057 302.707 172.905 297.508 172.704 292.359C172.603 287.109 172.552 281.86 172.552 276.61C172.552 272.37 174.622 270.25 178.761 270.25H205.111ZM406.975 485.289C393.851 485.289 382.846 482.159 373.962 475.9C365.078 469.641 358.364 461.362 353.821 451.064C349.379 440.666 347.158 429.409 347.158 417.294V414.871C347.36 402.15 349.985 390.187 355.033 378.981C360.182 367.774 367.602 358.739 377.294 351.874C386.986 344.908 398.697 341.425 412.427 341.425C420.907 341.425 428.782 343.04 436.051 346.27C443.421 349.4 450.286 353.691 456.646 359.143C457.353 359.849 457.959 360.203 458.464 360.203C459.675 360.203 460.23 358.941 460.129 356.417C460.129 353.893 460.483 351.369 461.189 348.845C461.997 346.321 464.016 345.059 467.247 345.059H488.599C492.739 345.059 494.808 347.129 494.808 351.268C494.808 355.609 494.758 359.95 494.657 364.291C494.657 368.633 494.657 372.974 494.657 377.315C494.657 388.42 494.707 399.576 494.808 410.782C495.01 421.989 495.162 433.144 495.263 444.25C495.364 449.499 495.465 454.8 495.565 460.151C495.767 465.4 495.868 470.701 495.868 476.051C495.868 480.292 493.799 482.412 489.659 482.412H465.884C463.158 482.412 461.391 481.553 460.584 479.837C459.776 478.02 459.423 475.9 459.524 473.477C459.625 471.054 459.625 468.883 459.524 466.965C459.524 466.662 459.473 466.157 459.372 465.451C459.271 464.744 458.968 464.391 458.464 464.391C458.06 464.391 457.656 464.542 457.252 464.845C456.949 465.148 456.646 465.4 456.344 465.602C449.276 471.559 441.654 476.354 433.477 479.989C425.299 483.522 416.465 485.289 406.975 485.289ZM422.422 453.033C429.59 453.033 436.203 451.569 442.26 448.641C448.418 445.613 453.214 440.868 456.646 434.406C456.848 434.003 457.303 432.993 458.009 431.378C458.817 429.661 459.221 428.601 459.221 428.197C459.221 424.664 459.17 421.13 459.069 417.597C459.069 414.063 459.069 410.58 459.069 407.148C459.069 405.533 459.12 403.766 459.221 401.848C459.322 399.828 459.271 398.062 459.069 396.547C458.968 395.841 458.565 394.781 457.858 393.367C457.252 391.954 456.798 390.944 456.495 390.338C452.961 383.978 447.964 379.233 441.503 376.103C435.041 372.974 428.277 371.409 421.21 371.409C413.739 371.409 407.177 373.277 401.524 377.012C395.87 380.747 391.428 385.694 388.197 391.853C385.068 397.91 383.503 404.573 383.503 411.842C383.503 419.111 385.169 425.875 388.5 432.135C391.832 438.394 396.425 443.442 402.281 447.278C408.237 451.115 414.951 453.033 422.422 453.033ZM532.819 345.059H553.414C556.847 345.059 558.866 346.876 559.472 350.511C559.673 351.318 559.875 352.934 560.077 355.357C560.279 357.78 560.532 360.051 560.835 362.171C561.238 364.291 561.743 365.351 562.349 365.351C562.854 365.351 563.308 365.15 563.712 364.746C564.116 364.241 564.418 363.837 564.62 363.534C571.284 355.559 578.906 349.905 587.487 346.573C596.17 343.141 605.609 341.425 615.806 341.425C624.084 341.425 632.11 342.939 639.884 345.968C647.759 348.996 653.564 354.549 657.299 362.626C657.501 362.928 657.703 363.332 657.905 363.837C658.107 364.342 658.46 364.594 658.965 364.594C659.369 364.594 659.722 364.443 660.025 364.14C660.328 363.736 660.58 363.433 660.782 363.231C667.042 356.366 674.311 351.066 682.589 347.331C690.868 343.494 699.651 341.576 708.939 341.576C721.256 341.576 731.856 345.009 740.741 351.874C749.726 358.638 754.219 368.633 754.219 381.858C754.219 392.459 754.319 403.11 754.521 413.811C754.723 424.412 754.925 435.012 755.127 445.613C755.329 450.66 755.531 455.759 755.733 460.908C756.036 465.956 756.187 471.003 756.187 476.051C756.187 480.292 754.118 482.412 749.978 482.412H726.354C724.133 482.412 722.568 481.907 721.66 480.897C720.852 479.888 720.347 478.373 720.145 476.354C719.742 472.114 719.59 467.823 719.691 463.482C719.792 459.04 719.742 454.699 719.54 450.459C719.439 441.372 719.287 432.286 719.085 423.2C718.984 414.114 718.934 405.028 718.934 395.942C718.934 388.875 717.218 383.372 713.785 379.435C710.453 375.397 705.153 373.378 697.884 373.378C689.505 373.378 682.387 375.952 676.532 381.101C670.676 386.25 666.184 392.66 663.054 400.333C660.025 407.905 658.511 415.376 658.511 422.746C658.511 431.63 658.561 440.514 658.662 449.399C658.763 458.283 658.814 467.218 658.814 476.203C658.814 480.342 656.744 482.412 652.605 482.412H628.678C624.539 482.412 622.469 480.342 622.469 476.203C622.469 462.775 622.57 449.399 622.772 436.072C622.974 422.746 622.974 409.369 622.772 395.942C622.671 389.177 620.955 383.726 617.623 379.586C614.392 375.447 609.193 373.378 602.025 373.378C593.444 373.378 586.225 375.952 580.37 381.101C574.514 386.149 570.072 392.509 567.043 400.182C564.015 407.855 562.399 415.477 562.197 423.049C562.096 429.207 561.996 435.365 561.895 441.524C561.794 447.682 561.642 453.891 561.44 460.151C561.44 462.775 561.44 465.501 561.44 468.328C561.541 471.054 561.44 473.729 561.137 476.354C560.935 478.373 560.38 479.888 559.472 480.897C558.664 481.907 557.15 482.412 554.928 482.412H531.153C527.014 482.412 524.944 480.241 524.944 475.9C524.944 470.65 525.045 465.451 525.247 460.302C525.55 455.052 525.752 449.802 525.853 444.553C526.458 422.443 526.761 400.384 526.761 378.375C526.761 374.236 526.66 369.693 526.458 364.746C526.257 359.799 526.307 355.306 526.61 351.268C526.913 347.129 528.982 345.059 532.819 345.059ZM784.506 293.419C784.506 287.867 786.575 283.122 790.715 279.184C794.854 275.146 799.7 273.127 805.252 273.127C810.906 273.127 815.853 275.196 820.093 279.336C824.434 283.374 826.605 288.27 826.605 294.025C826.605 299.578 824.535 304.424 820.396 308.563C816.358 312.601 811.512 314.62 805.858 314.62C800.104 314.62 795.106 312.551 790.866 308.411C786.626 304.171 784.506 299.174 784.506 293.419ZM786.777 384.735V351.268C786.777 347.129 788.847 345.059 792.986 345.059H816.307C820.447 345.059 822.516 347.129 822.516 351.268C822.516 372.065 822.567 392.913 822.668 413.811C822.769 434.608 822.819 455.405 822.819 476.203C822.819 480.342 820.749 482.412 816.61 482.412H792.683C788.544 482.412 786.474 480.342 786.474 476.203C786.474 460.958 786.525 445.714 786.626 430.469C786.727 415.224 786.777 399.98 786.777 384.735ZM178.761 739.412C174.622 739.412 172.552 737.292 172.552 733.051C172.552 727.499 172.603 721.996 172.704 716.545C172.905 710.992 173.057 705.439 173.158 699.887C173.36 688.277 173.511 676.667 173.612 665.056C173.713 653.446 173.764 641.836 173.764 630.226C173.764 618.616 173.713 607.006 173.612 595.396C173.511 583.786 173.36 572.176 173.158 560.565C173.057 555.013 172.905 549.511 172.704 544.059C172.603 538.506 172.552 532.954 172.552 527.401C172.552 523.161 174.622 521.041 178.761 521.041H202.536C206.575 521.041 208.644 523.11 208.745 527.25C209.048 533.105 209.149 539.011 209.048 544.968C209.048 550.823 209.048 556.679 209.048 562.534C209.149 574.851 209.2 587.218 209.2 599.636C209.301 611.953 209.351 624.27 209.351 636.586V660.21C209.351 661.422 209.805 662.028 210.714 662.028C211.118 662.028 211.421 661.977 211.623 661.876C221.718 659.049 231.461 655.516 240.85 651.276C250.34 646.935 258.669 641.23 265.837 634.163C273.005 627.096 278.103 618.162 281.132 607.359C281.637 605.643 282.343 604.331 283.252 603.422C284.161 602.412 285.574 601.908 287.492 601.908H314.751C316.467 601.908 317.931 602.261 319.142 602.968C320.354 603.674 320.96 604.987 320.96 606.905C320.96 607.309 320.859 608.015 320.657 609.025C317.325 622.654 311.419 634.063 302.939 643.25C294.559 652.437 284.665 660.715 273.257 668.085C272.55 668.59 272.197 669.095 272.197 669.6C272.197 669.902 273.56 671.922 276.286 675.657C279.113 679.392 282.596 683.986 286.735 689.438C290.874 694.889 295.114 700.442 299.456 706.096C303.797 711.749 307.633 716.747 310.965 721.088C314.296 725.328 316.417 728.104 317.325 729.417C317.931 730.224 318.537 731.184 319.142 732.294C319.849 733.304 320.202 734.364 320.202 735.474C320.202 737.392 319.193 738.553 317.174 738.957C315.255 739.26 313.64 739.412 312.328 739.412H286.281C284.564 739.412 283 738.654 281.586 737.14C279.668 735.121 277.8 733.001 275.983 730.78C274.166 728.458 272.349 726.186 270.531 723.965C265.282 717.706 260.032 711.396 254.782 705.036C249.633 698.574 244.383 692.264 239.033 686.106C238.73 685.601 238.275 685.349 237.67 685.349C237.367 685.349 237.114 685.399 236.913 685.5C232.571 687.116 228.18 688.58 223.738 689.892C219.295 691.204 214.904 692.668 210.563 694.284C209.654 694.587 209.2 695.192 209.2 696.101L208.745 733.203C208.745 737.342 206.676 739.412 202.536 739.412H178.761ZM396.375 742.289C383.25 742.289 372.246 739.159 363.362 732.9C354.477 726.641 347.764 718.362 343.221 708.064C338.779 697.666 336.558 686.409 336.558 674.294V671.871C336.759 659.15 339.384 647.187 344.432 635.981C349.581 624.774 357.001 615.739 366.693 608.874C376.385 601.908 388.096 598.425 401.827 598.425C410.307 598.425 418.182 600.04 425.451 603.27C432.82 606.4 439.686 610.691 446.046 616.143C446.753 616.849 447.358 617.203 447.863 617.203C449.075 617.203 449.63 615.941 449.529 613.417C449.529 610.893 449.882 608.369 450.589 605.845C451.397 603.321 453.416 602.059 456.646 602.059H477.999C482.138 602.059 484.208 604.129 484.208 608.268C484.208 612.609 484.157 616.95 484.056 621.291C484.056 625.633 484.056 629.974 484.056 634.315C484.056 645.42 484.107 656.576 484.208 667.782C484.41 678.989 484.561 690.144 484.662 701.25C484.763 706.499 484.864 711.8 484.965 717.151C485.167 722.4 485.268 727.701 485.268 733.051C485.268 737.292 483.198 739.412 479.059 739.412H455.283C452.558 739.412 450.791 738.553 449.983 736.837C449.176 735.02 448.822 732.9 448.923 730.477C449.024 728.054 449.024 725.883 448.923 723.965C448.923 723.662 448.873 723.157 448.772 722.451C448.671 721.744 448.368 721.391 447.863 721.391C447.459 721.391 447.055 721.542 446.652 721.845C446.349 722.148 446.046 722.4 445.743 722.602C438.676 728.559 431.054 733.354 422.876 736.989C414.699 740.522 405.865 742.289 396.375 742.289ZM411.821 710.033C418.989 710.033 425.602 708.569 431.659 705.641C437.818 702.613 442.613 697.868 446.046 691.406C446.248 691.003 446.702 689.993 447.409 688.378C448.216 686.661 448.62 685.601 448.62 685.197C448.62 681.664 448.57 678.13 448.469 674.597C448.469 671.063 448.469 667.58 448.469 664.148C448.469 662.533 448.519 660.766 448.62 658.848C448.721 656.828 448.671 655.062 448.469 653.547C448.368 652.841 447.964 651.781 447.257 650.367C446.652 648.954 446.197 647.944 445.894 647.338C442.361 640.978 437.364 636.233 430.902 633.103C424.441 629.974 417.677 628.409 410.61 628.409C403.139 628.409 396.577 630.277 390.923 634.012C385.269 637.747 380.827 642.694 377.597 648.853C374.467 654.91 372.902 661.573 372.902 668.842C372.902 676.111 374.568 682.875 377.9 689.135C381.231 695.394 385.825 700.442 391.68 704.278C397.637 708.115 404.35 710.033 411.821 710.033ZM541.905 602.059C545.64 602.059 547.71 603.876 548.114 607.511C548.417 609.53 548.669 611.549 548.871 613.568C549.073 615.587 549.275 617.606 549.477 619.626C549.477 619.828 549.578 620.433 549.78 621.443C549.982 622.351 550.335 622.806 550.84 622.806C551.345 622.806 551.799 622.503 552.203 621.897C552.707 621.291 553.061 620.837 553.263 620.534C559.32 612.76 566.69 607.157 575.372 603.725C584.055 600.292 593.191 598.576 602.782 598.576C610.657 598.576 617.876 600.242 624.438 603.573C631.101 606.804 636.452 611.448 640.49 617.505C644.528 623.462 646.547 630.579 646.547 638.858C646.547 654.506 646.699 670.205 647.002 685.955C647.406 701.704 647.607 717.403 647.607 733.051C647.607 737.292 645.538 739.412 641.399 739.412H617.623C613.787 739.412 611.717 737.342 611.414 733.203C611.111 728.862 611.01 724.52 611.111 720.179C611.212 715.737 611.212 711.345 611.111 707.004C611.01 697.716 610.96 688.479 610.96 679.291C610.96 670.104 610.96 660.917 610.96 651.73C610.96 644.562 608.89 639.211 604.751 635.678C600.612 632.043 595.11 630.226 588.244 630.226C579.663 630.226 572.596 632.851 567.043 638.101C561.592 643.351 557.503 649.812 554.777 657.485C552.152 665.157 550.84 672.679 550.84 680.049C550.84 688.933 550.789 697.817 550.688 706.701C550.587 715.485 550.486 724.318 550.385 733.203C550.385 737.342 548.316 739.412 544.177 739.412H520.401C516.262 739.412 514.192 737.292 514.192 733.051C514.192 727.398 514.243 721.795 514.344 716.242C514.546 710.588 514.697 704.985 514.798 699.432C515.101 675.808 515.252 652.184 515.252 628.56V608.268C515.252 604.129 517.322 602.059 521.461 602.059H541.905ZM730.746 742.289C717.622 742.289 706.617 739.159 697.733 732.9C688.849 726.641 682.135 718.362 677.592 708.064C673.15 697.666 670.929 686.409 670.929 674.294V671.871C671.131 659.15 673.755 647.187 678.803 635.981C683.952 624.774 691.373 615.739 701.064 608.874C710.756 601.908 722.467 598.425 736.198 598.425C744.678 598.425 752.553 600.04 759.822 603.27C767.192 606.4 774.057 610.691 780.417 616.143C781.124 616.849 781.73 617.203 782.234 617.203C783.446 617.203 784.001 615.941 783.9 613.417C783.9 610.893 784.253 608.369 784.96 605.845C785.768 603.321 787.787 602.059 791.018 602.059H812.37C816.509 602.059 818.579 604.129 818.579 608.268C818.579 612.609 818.528 616.95 818.428 621.291C818.428 625.633 818.428 629.974 818.428 634.315C818.428 645.42 818.478 656.576 818.579 667.782C818.781 678.989 818.932 690.144 819.033 701.25C819.134 706.499 819.235 711.8 819.336 717.151C819.538 722.4 819.639 727.701 819.639 733.051C819.639 737.292 817.569 739.412 813.43 739.412H789.655C786.929 739.412 785.162 738.553 784.354 736.837C783.547 735.02 783.193 732.9 783.294 730.477C783.395 728.054 783.395 725.883 783.294 723.965C783.294 723.662 783.244 723.157 783.143 722.451C783.042 721.744 782.739 721.391 782.234 721.391C781.83 721.391 781.427 721.542 781.023 721.845C780.72 722.148 780.417 722.4 780.114 722.602C773.047 728.559 765.425 733.354 757.247 736.989C749.07 740.522 740.236 742.289 730.746 742.289ZM746.192 710.033C753.36 710.033 759.973 708.569 766.031 705.641C772.189 702.613 776.985 697.868 780.417 691.406C780.619 691.003 781.073 689.993 781.78 688.378C782.588 686.661 782.991 685.601 782.991 685.197C782.991 681.664 782.941 678.13 782.84 674.597C782.84 671.063 782.84 667.58 782.84 664.148C782.84 662.533 782.891 660.766 782.991 658.848C783.092 656.828 783.042 655.062 782.84 653.547C782.739 652.841 782.335 651.781 781.629 650.367C781.023 648.954 780.568 647.944 780.266 647.338C776.732 640.978 771.735 636.233 765.273 633.103C758.812 629.974 752.048 628.409 744.981 628.409C737.51 628.409 730.948 630.277 725.294 634.012C719.641 637.747 715.199 642.694 711.968 648.853C708.838 654.91 707.273 661.573 707.273 668.842C707.273 676.111 708.939 682.875 712.271 689.135C715.602 695.394 720.196 700.442 726.051 704.278C732.008 708.115 738.722 710.033 746.192 710.033Z"
          fill="white"
        />
      </svg>

      <div className="border border-black/10 bg-black/5 shadow-inner p-6 gap-2 rounded-xl flex flex-col">
        {emailOpen && confirmEmail === "" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            action=""
            className="flex flex-col gap-2 "
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-64 h-11 outline-none rounded-md shadow-sm border border-black/10"
              type="email"
              name="email"
              placeholder="Email"
            />

            <button
              onClick={async () => {
                setLoading(true);
                await signup({ email });
                setConfirmEmail("confirm");
                setLoading(false);
              }}
              className="w-64 h-11 bg-white hover:bg-neutral-100 duration-200 flex justify-center items-center rounded-md  border border-black/10 shadow-sm"
              type="submit"
            >
              {loading ? <Loader2Icon className="animate-spin" /> : "Continue"}
            </button>
          </form>
        )}

        {confirmEmail === "confirm" && (
          <p className="">Please check your email for the magic link</p>
        )}

        {!emailOpen && (
          <SignInButton
            onClick={() => setEmailOpen(true)}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
            brand="Email"
          />
        )}
        {!emailOpen && (
          <SignInButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
                width="18"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
            }
            brand="Google"
            signInWith={signInWithGoogle}
          />
        )}
        {!emailOpen && (
          <SignInButton
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            }
            brand="GitHub"
            signInWith={signInWithGithub}
          />
        )}
      </div>

      <div className="text-xs text-center max-w-xs  text-black/60">
        By continuing, you agree to Kamikana&apos;s{" "}
        <a
          href="https://www.kamikana.com/terms"
          target="_blank"
          className="underline"
        >
          Terms of Service
        </a>
        , and acknowledge the{" "}
        <a
          href="https://www.kamikana.com/privacy"
          target="_blank"
          className="underline"
        >
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
