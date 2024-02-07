import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [

    {
        routeLink: 'dashboard',
        // icon: 'assets/icons/home-icon.png',
        icon:'fas fa-home',
        label: 'Dashboard',
        // items: [
        //     {
        //         routeLink: 'products/level1.1',
        //         label: 'Level 1.1',
        //         items: [
        //             {
        //                 routeLink: 'products/level2.1',
        //                 label: 'Level 2.1',
        //             },
        //             {
        //                 routeLink: 'products/level2.2',
        //                 label: 'Level 2.2',
        //                 items: [
        //                     {
        //                         routeLink: 'products/level3.1',
        //                         label: 'Level 3.1'
        //                     },
        //                     {
        //                         routeLink: 'products/level3.2',
        //                         label: 'Level 3.2'
        //                     }
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         routeLink: 'products/level1.2',
        //         label: 'Level 1.2',
        //     }
        // ]
    },
    {
        routeLink: 'transaction',
        // icon: 'assets/icons/Transaction-icon.png',
        icon: 'fas fa-exchange-alt',
        label: 'Transaction'
    },
    // {
    //     routeLink: 'manage-cards',
    //     // icon: 'assets/icons/Transaction-icon.png',
    //     icon: 'fas fa-exchange-alt',
    //     label: 'Manage Cards'
    // },
    // {
    //     routeLink: 'generate-invoice',
    //     // icon: 'assets/icons/Transaction-icon.png',
    //     icon: 'fas fa-exchange-alt',
    //     label: 'Generate Invoice'
    // },
    {
        routeLink: 'cards',
        // icon: 'assets/icons/Transaction-icon.png',
        icon: 'fas fa-envelope',
        label: 'Manage Cards'
    },
    {
        routeLink: 'profile',
        // icon: 'assets/icons/Transaction-icon.png',
        icon: 'fas fa-gear',
        label: 'Settings'
    }
];