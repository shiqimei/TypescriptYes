export class Canvas2D {
    public context: CanvasRenderingContext2D | null;
    public constructor(canvas: HTMLCanvasElement) {
        this.context = canvas.getContext('2d');
    }
    public drawText(text: string): void {
        if (this.context !== null) {
            this.context.save();
            // 让绘制的文本居中对齐
            this.context.textBaseline = 'middle';
            this.context.textAlign = 'center';
            // 计算 canvas 的中心坐标
            const centerX: number = this.context.canvas.width * 0.5;
            const centerY: number = this.context.canvas.height * 0.5;
            // 填充
            this.context.fillStyle = 'red';
            this.context.fillText(text, centerX, centerX);
            // 描边
            this.context.strokeStyle = 'green';
            this.context.strokeText(text, centerX, centerY);
            this.context.restore();
        }
    }
}