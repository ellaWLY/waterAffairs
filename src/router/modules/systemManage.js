import BasicLayout from '@/layouts/basic-layout'
const pre = 'systemManage-'

const meta = {
    auth: false
}

export default {
    path: '/systemManage',
    title: '系统管理',
    custom: 'icon iconfont i-icon-demo icon-xitong',
    redirect: {
        name: `${pre}rolePermission`
    },
    component: BasicLayout,
    meta,
    children: [
        {
            path: 'rolePermission',
            name: `${pre}rolePermission`,
            meta: {
                ...meta,
                title: '角色权限',
                closable: false
            },
            component: () => import('@/pages/systemManage/rolePermission')
        }, {
            path: 'terminalDeploy',
            name: `${pre}terminalDeploy`,
            meta: {
                ...meta,
                title: '终端配置',
                closable: false
            },
            component: () => import('@/pages/systemManage/terminalDeploy')
        }, {
            path: 'SIMManage',
            name: `${pre}SIMManage`,
            meta: {
                ...meta,
                title: 'SIM卡管理',
                closable: false
            },
            component: () => import('@/pages/systemManage/SIMManage')
        }, {
            path: 'indexManage',
            name: `${pre}indexManage`,
            meta: {
                ...meta,
                title: '指标管理',
                closable: false
            },
            component: () => import('@/pages/systemManage/indexManage')
        }, {
            path: 'flowAlarm',
            name: `${pre}flowAlarm`,
            meta: {
                ...meta,
                title: '流量报警设置',
                closable: false
            },
            component: () => import('@/pages/systemManage/flowAlarm')
        }, {
            path: 'handleLog',
            name: `${pre}handleLog`,
            meta: {
                ...meta,
                title: '操作日志',
                closable: false
            },
            component: () => import('@/pages/systemManage/handleLog')
        }
    ]
}
