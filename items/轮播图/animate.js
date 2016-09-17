/**
 * Created by Dennis on 2016/6/17.
 */
function animate(element,target){
    //���֮ǰ�Ķ�ʱ��
    if(element.timerId){
        clearInterval(element.timerId);
    }
    //����Ŀ��Ͳ���
    var step = 20;
    //αԪ�ض������ö�ʱ������
    element.timerId = setInterval(function () {
        var current = element.offsetLeft;
        if(current>target){
            step = -Math.abs(step);
        }

        if (Math.abs(target-current)>Math.abs(step)){
            current +=step;
            element.style.left = current+"px";
        }else{
            clearInterval(element.timerId);
            element.style.left = target+"px";
        }
    },5)
}