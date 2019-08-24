import React from 'react';
export default class FooterComponent extends React.Component {
    render() {
        return (
            <footer className="sticky-footer">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © Your Website 2019</span>
                    </div>
                </div>
            </footer>
        )
    }
}