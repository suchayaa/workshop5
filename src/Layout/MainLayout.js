import React from 'react';
import HeaderComponent from './HeaderComponent';
import SidebarComponent from './SidebarComponent';
import FooterComponent from './FooterComponent';
import ReadExpense from '../ExpensePage/ReadExpense';
export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div id="wrapper">
                    <SidebarComponent />
                    <div id="content-wrapper">
                        <div class="container-fluid">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="index.html">Dashboard</a>
                                </li>
                                <li class="breadcrumb-item active">Blank Page</li>
                            </ol>


                            <hr />
                            <ReadExpense />

                        </div>
                        <FooterComponent />
                    </div>
                </div>
            </div>
        )
    }
}