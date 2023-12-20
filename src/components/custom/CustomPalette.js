// CustomPalette.js
export default class CustomPalette {
    constructor(bpmnFactory, create, elementFactory, palette, translate) {
        this.bpmnFactory = bpmnFactory;
        this.create = create;
        this.elementFactory = elementFactory;
        this.translate = translate;
        palette.registerProvider(this);
    }
    // 这个函数就是绘制palette的核心
    getPaletteEntries(element) {
        return {
            'create.lindaidai-task': {
                group: 'model', // 分组名
                className: 'icon-custom lindaidai-task', // 样式类名
                title: translate('创建一个类型为lindaidai-task的任务节点'),
                action: { // 操作
                    dragstart: createTask(), // 开始拖拽时调用的事件
                    click: createTask() // 点击时调用的事件
                }
            }
        }
    }
    createTask() {
        console.log('事件触发')
    }
}

CustomPalette.$inject = [
    'bpmnFactory',
    'create',
    'elementFactory',
    'palette',
    'translate'
]
