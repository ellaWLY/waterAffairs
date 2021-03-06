import BasicLayout from '@/layouts/basic-layout'
const pre = 'basicsManage-'

const meta = {
    auth: false
}

export default {
    path: '/basicsManage',
    title: '基础管理',
    custom: 'icon iconfont i-icon-demo icon-jichuxinxi',
    redirect: {
        name: `${pre}tissueInfor`
    },
    component: BasicLayout,
    meta,
    children: [
        {   
            path: 'tissueInfor',
            name: `${pre}tissueInfor`,
            meta: {
                ...meta,
                title: '组织信息',
                closable: false
            },
            component: () => import('@/pages/basicsManage/tissueInfor')
        }, {
            path: 'userInfor',
            name: `${pre}userInfor`,
            meta: {
                ...meta,
                title: '用户信息',
                closable: false
            },
            component: () => import('@/pages/basicsManage/userInfor')
        }, {
            path: 'areaSiteInfor',
            name: `${pre}areaSiteInfor`,
            meta: {
                ...meta,
                title: '区域位置信息',
                closable: false
            },
            component: () => import('@/pages/basicsManage/areaSiteInfor')
        }, {
            path: 'deviceKindInfor',
            name: `${pre}deviceKindInfor`,
            meta: {
                ...meta,
                title: '设备类型信息',
                closable: false
            },
            component: () => import('@/pages/basicsManage/deviceKindInfor')
        }
    ]
}
