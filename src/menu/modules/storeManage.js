const pre = '/storeManage/';

export default {
    path: '/storeManage',
    title: '库存管理',
    header: 'home',
    custom: 'icon iconfont i-icon-demo icon-fangzi01-copy',
    children: [
        {
            path: `${pre}storeQuery`,
            title: '库存查询'
        }, {
            path: `${pre}storeAdjust`,
            title: '库存调整'
        }, {
            path: `${pre}putStorage`,
            title: '入库管理'
        }, {
            path: `${pre}outStorage`,
            title: '出库管理'
        }, {
            path: `${pre}allotManage`,
            title: '调拨管理'
        }, {
            path: `${pre}checkManage`,
            title: '盘点管理'
        }, {
            path: `${pre}warehouseInfor`,
            title: '仓库信息'
        }, {
            path: `${pre}materialInfor`,
            title: '物料信息'
        }, {
            path: `${pre}materialCategory`,
            title: '物料类别'
        }, {
            path: `${pre}goodsRntryForm`,
            title: '进销存报表'
        }, {
            path: `${pre}storeMoveForm`,
            title: '库存移动报表'
        }, {
            path: `${pre}checkPLForm`,
            title: '盘点盈亏报表'
        }
    ]
}
