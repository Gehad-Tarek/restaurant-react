import React from 'react';

export default function Header() {
    return (
        <div className="content">
            <ul>
                <a href="#">
                    <li>
                        قائمة الطعام
                        <i class="fas fa-bars"></i>
                    </li>
                </a>
                <a href="#">
                    <li>
                        التسجيل
                        <i class="far fa-user"></i>
                    </li>
                </a>
                <a href="#">
                    <li>
                        0
                        <i class="fas fa-shopping-cart"></i>
                    </li>
                </a>
                <a href="#">
                    <li>
                        عروض الطعام
                    <i class="fas fa-certificate"></i>
                    </li>
                </a>
                <a href="#">
                    <li>
                        اتصل بنا
                    </li>
                </a>
                <a href="#">
                    <li>
                        من نحن
                    </li>
                </a>
                <a href="../../../App.js">
                    <li>
                        <img src="images/logo.png" />
                    </li>
                </a>
            </ul>
        </div >
    );
}
