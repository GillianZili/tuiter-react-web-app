import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";//引入函数

const WhoToFollowList = () => {
    //函数返回一个模板字符串（使用反引号 ` 包裹的字符串），这是 ES6 中的一种字符串格式，可以在字符串中嵌入表达式
  return `
        <ul class="list-group">
            <li class="list-group-item" style="font-weight: 700">
                Who to follow
            </li>
            ${who.map((w) => WhoToFollowListItem(w)).join("")}
        </ul>
    `;
};
 //使用了模板字符串中的插值表达式 ${}。在这个表达式中，who 是一个数组（假设它已经在其他地方定义过）,
//who.map((w) => WhoToFollowListItem(w)) 遍历这个数组中的每个元素 w,
//并对每个元素调用 WhoToFollowListItem 函数，将结果拼接成一个新数组,
//然后，.join("") 将这个新数组中的所有字符串连接成一个单一的字符串，插入到 ul 元素中

export default WhoToFollowList;// 导出 WhoToFollowList 函数，使其可以在其他文件中被导入使用