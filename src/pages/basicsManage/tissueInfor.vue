<template>
    <div class="tissue-box">
        <div class="tissue-tree">
            <div class="tissue-left">
                <div class="tissue-title">
                    <h3>组织结构</h3>
                </div>
                <div class="tissue-list">
                    <Tree :data="baseData" :render="renderContent" class="demo-tree-render"></Tree>
                    <!-- <div class="tissue-li">
                        <span>联泰潮英智慧水务</span>
                        <span>新建</span>
                    </div> -->
                </div>
            </div>
            <div class="tissue-right">
                <div class="tissue-title">
                    <h3>组织信息</h3> 
                    <span>
                        <Button type="primary">保存</Button>
                        <Button>取消</Button>
                    </span>
                </div>
                <div class="tissue-content">
                    <Form :model="tissueList" label-position="left" :label-width="100" autocomplete="off">
                        <h4>组织名称</h4>
                        <FormItem>
                            <Input v-model="tissueList.name"></Input>
                        </FormItem>
                        <h4>组织类别</h4>
                        <FormItem>
                            <RadioGroup v-model="tissueList.type">
                                <Radio label="company">公司</Radio>
                                <Radio label="plant">工厂</Radio>
                                <Radio label="department">部门</Radio>
                                <Radio label="班组">班组</Radio>
                            </RadioGroup>
                        </FormItem>
                        <div>公司信息</div>
                        <FormItem label="公司全称：">
                            <Input v-model="tissueList.fullName"></Input>
                        </FormItem>
                        <FormItem label="负责人：">
                            <Input v-model="tissueList.principal"></Input>
                        </FormItem>
                        <FormItem label="手机：">
                            <Input v-model="tissueList.phone"></Input>
                        </FormItem>

                        <FormItem label="地址：">
                            <Input v-model="tissueList.site"></Input>
                        </FormItem>
                        <FormItem label="附属信息：">
                            <Input v-model="tissueList.other"></Input>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tissueInfor',
    data () {
        return {
            baseData: [{
                title: 'parent 1',
                expand: true,
                render: (h, { root, node, data }) => {
                    return h('span', {
                        style: {
                            display: 'inline-block',
                            width: '100%'
                        },
                        on: {
                            //鼠标进入
                            'mouseenter': () => {
                                data.is_show = true;
                            },
                            //鼠标离开
                            'mouseleave': () => {
                                data.is_show = false;
                            }
                        }
                    }, [
                        h('span', [
                            h('span', data.title),
                        ]),
                        h('span', {
                            style: {
                                display: 'inline-block',
                                float: 'right'
                            }
                        }, [
                            h('Button', {
                                props: Object.assign({}, this.buttonProps, {
                                    type: 'primary'
                                }),
                                style: {
                                    display: data.is_show ? 'block' : 'none'
                                },
                                on: {
                                    // click: () => { this.append(data) }
                                }
                            },'新增')
                        ])
                    ]);
                },
                children: [
                    {
                        title: 'child 1-1',
                        expand: true,
                        children: [
                            {
                                title: 'leaf 1-1-1',
                                expand: true
                            },
                            {
                                title: 'leaf 1-1-2',
                                expand: true
                            }
                        ]
                    },
                    {
                        title: 'child 1-2',
                        expand: true,
                        children: [
                            {
                                title: 'leaf 1-2-1',
                                expand: true
                            },
                            {
                                title: 'leaf 1-2-1',
                                expand: true
                            }
                        ]
                    }
                ]
            }],
            buttonProps: {
                type: 'default',
                size: 'small'
            },
            tissueList: {
                name: '',
                type: '',
                fullName: '',
                principal: '',
                phone: '',
                site: '',
                other: ''
            }
        }
    },
    methods: {
        renderContent (h, { root, node, data }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                },
                on: {
                    //鼠标进入
                    'mouseenter': () => {
                        data.is_show = true;
                    },
                    //鼠标离开
                    'mouseleave': () => {
                        data.is_show = false;
                    }
                }
            }, [
                h('span', [
                    h('span', data.title)
                ]),
                h('span', {
                    style: {
                        display: 'inline-block',
                        float: 'right'
                    }
                }, [
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            type: 'primary'
                        }),
                        style: {
                            marginRight: '4px',
                            display: data.is_show ? 'inline-block' : 'none'
                        },
                        on: {
                            // click: () => { this.append(data) }
                        }
                    },'编辑'),
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            type: 'primary'
                        }),
                        style: {
                            display: data.is_show ? 'inline-block' : 'none'
                        },
                        on: {
                            // click: () => { this.remove(root, node, data) }
                        }
                    },'删除')
                ])
            ]);
        },
        append (data) {
            const children = data.children || [];
            children.push({
                title: 'appended node',
                expand: true
            });
            this.$set(data, 'children', children);
        },
        remove (root, node, data) {
            const parentKey = root.find(el => el === node).parent;
            const parent = root.find(el => el.nodeKey === parentKey).node;
            const index = parent.children.indexOf(data);
            parent.children.splice(index, 1);
        }
    }
}
</script>
<style lang="less" scoped>
.tissue-box {
    margin: -18px -24px -24px -24px;
    .tissue-tree {
        display: flex;
        min-height: 100%;
        .tissue-title {
            border-bottom: 1px solid #f0f0f0;
            height: 40px;
            line-height: 40px;
            text-indent: 10px;
            color: #495060;
            h3 {
                display: inline;
            }
            span {
                display: inline;
                float: right;
            }
            .ivu-btn {
                height: 25px;
                font-size: 12px;
                padding: 0 20px;
            }
            .ivu-btn-primary {
                margin-right: 15px;
            }
        }
        .tissue-left {
            width: 350px;
            background: #FFF;
            .tissue-list {
                width: 100%;
                padding: 0 10px;
                /deep/.ivu-tree-title {
                    width: 100%;
                }
            }
        }
        .tissue-right {
            flex: 1;
            min-height: 100%;
            width: 100%;
            background: #FFF;
            border-left: 5px solid #f5f7f9;
            border-right: 5px solid #f5f7f9;
            .tissue-content {
                padding: 20px 50px;
            }
        }
    }
    /deep/.ivu-row {
        margin: 0!important;
        /deep/.ivu-col{
            background: #fff;
            padding: 0!important;
        }
        /deep/.ivu-col-span-xl-6 {
            width: 24%;
            margin-right: 1%;
        }
    }
    .tissueTitle {
        border-bottom: 1px solid #f0f0f0;
        height: 40px;
        line-height: 40px;
        text-indent: 10px;
        font-size: 15px;
        font-weight: bold;
        color: #495060;
    }
    .tissueTitle1 {
        height: 50px;
        line-height: 50px;
    }
}
</style>