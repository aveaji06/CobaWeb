import React, { useEffect } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import WelcomeWidget from './WelcomeWidget';
import OrderStatistics from './OrderStatistics';
import Widgets from './Widgets';
import SalesRevenue from './SalesRevenue';
import TrafficResources from './TrafficResources';
import ProductsOrders from './ProductsOrders';
import ScheduledFeed from './ScheduledFeed';
import UpcomingFeed  from "./UpcomingFeed";
import CustomerService from './CustomerService';
import SalesMonth from './SalesMonth';
import TopSellingProducts from './TopSellingProducts';
import Audience from './Audience';
import { useNavigate } from 'react-router-dom';

const Ecommerce = () => {

    const navigate = useNavigate();
    useEffect(() => navigate("/dashboards-automatic"), [navigate]);

    return (
        <React.Fragment>
            <BreadCrumb title='All Automatic' pageTitle='Automatic' />
            <div className="grid grid-cols-12 gap-x-5">
                {/*<WelcomeWidget />*/}
                <SalesRevenue />
                <Widgets />

                <ScheduledFeed/>
                <UpcomingFeed />

                <TrafficResources />
                <OrderStatistics />


                <ProductsOrders />
            </div>
        </React.Fragment>
    );
};

export default Ecommerce;
