export default {
    name: "basic",
    cards: [
        ["调幅(AM),调频(FM),调相(PM)分别是什么", "image:network_mod_methods.png",],
        ["image:network_p1.png", "以太网使用曼彻斯特编码，正跳变和负跳变代表0或1 \n 题中没有指明正跳变是1还是0,我们可以假设正跳变是1 \n 比特流就是:110101001,跟所有选项都不符,所以正跳变是0 \n 比特流就是00110110, 选A",],
        ["不归零编码", "正电平表示1,负电平表示0,所谓不归零,就是不会出现零电平 \n 这个编码需要额外的一根线来传输时钟信号,使发送方和接收方同步",
            "归零编码", "每个码元传输结束后信号都要归零,所以不需要单独的时钟信号 \n 但这种编码的带宽大部分都被归零浪费掉了,它的优点是自同步，缺点是效率低","image:network_rtz_code.png",
            "曼彻斯特编码", "正跳变表示1,负跳变表示0 \n 码元中间时刻的跳变，既表示时钟，又表示数据","image:network_man_code.png",
            "差分曼彻斯特编码", "跳变仅表示时钟，码元开始处电平是否变化表示数据, 变化表示0,不变表示1", "image:network_dman_code.png"
        ],

        ["信号是什么", "网卡将比特0和1转换为相应的电信号发送到网线 \n 信号是数据的电磁表现", "什么是基带信号", "由信源发送的原始信号,称作基带信号",
            "基带信号有哪几种?",
            "基带信号分两种，一种是数字基带信号 \n 例如计算机内部传输的信号 \n 另一种是模拟基带信号，例如麦克风收到声音后产生的音频信号",
            "什么是编码",
            "编码后数字信号、模拟信号可在数字信道中传输 \n 如以太网使用的曼彻斯特编码 \n 或者将音频信号采样、量化、编码三个步骤数字化，脉码调制PCM",
            "什么是调制?",
            "调制后的信号可在模拟信道中传输 \n 例始 Wifi使用CCK/DSSS/OFDM等调制方法 ",
        ],
        ["码元是什么", "一个固定时长(码元长度)的信号波形"],
        ["分组转发时延图", "image:network_packet_switch_diagram.png"],
        ["报文转发时延图", "image:network_message_switch_diagram.png"],
        ["电路转发时延图", "image:network_circuit_transfer_diagram.png"],
        ["若分组等长，各链路长度相同，带宽也相同，忽略处理时延，那总时延为？", "总时延=(n+m-1)发送时延+m传播时延"],

        ["各协议PDU的称号", "物理层：比特流(bit stream) \n 链路层：帧(frame) \n 网络层：IP数据报或分组(packet) \n 传输层：TCP报文段(segment), UDP用户数据报(datagram) \n 应用层：报文(message)"],
        ["网络协议的三要素", "语法:定义所交换信息的格式 \n 语义:定义收发双方要完成的操作 \n 同步:定义收发双方的时序关系"],
        ["实体和对等实体", "实体：任何可发送或接收信息的硬件或软件进程 \n 对等实体：收发双方相同层次的实体"],
        ["TCP/IP模型，OSI模型", "教学使用的体系结构:应用层,运输层,网络层,数据链路层,物理层 \n TCP/IP体系结构:应用层,运输层,网际层,网络接口层 \n OSI体系结构:应用层,表示层,会话层,运输层,网络层,数据链路层,物理层"],
    ]
}
