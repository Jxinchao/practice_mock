<template>
<!-- 
  组件: 日期区间选择组件
  作者: 混沌传奇
  qq: 634401745
  邮箱: iot-pro_lizeng@foxmail.com
 -->
  <div class="date-range-picker">
    <div class="flex flex-align-center flex-pack-justify date-input"
     :class="{'date-input-fouce': dateInputFouce}" @click.stop="toggle">
      <span v-if="dateRange.length">{{dateFilter(dateRange, 'min')}} 至 {{dateFilter(dateRange, 'max')}}</span>
      <span v-else>{{hotKeySelected}}</span>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="flex date-select-box" :style="{'left': left, 'right': right, transform: translate}" v-show="dateSelectOpen" @click.stop>
      <div class="hot-key-box">
        <div class="hot-key" :class="{'hot-key-select': hotKeySelected==hotKey.value}" @click="selectHotKey(hotKey)"
         v-for="(hotKey, index) in hotKeyList" :key="index">{{hotKey.value}}</div>
      </div>
      <div class="date-start-box">
        <div class="flex flex-align-center flex-pack-justify date-title">
          <div class="date-control-left">
            <i class="fa fa-angle-double-left" :class="{'date-control-not-allowed': !monthChangeButtonStatus('left','-','Y')}"
             @click="monthChangeButtonStatus('left','-','Y') ? gotoLastY('left') : ''"></i>
            <i class="fa fa-angle-left" :class="{'date-control-not-allowed': !monthChangeButtonStatus('left','-','M')}"
             @click="monthChangeButtonStatus('left','-','M') ? gotoLastM('left') : ''"></i>
          </div>
          <div>{{leftDate}}</div>
          <div class="date-control-right">
            <i class="fa fa-angle-right" :class="{'date-control-not-allowed': !monthChangeButtonStatus('left','+','M')}"
             @click="monthChangeButtonStatus('left','+','M') ? gotoNextM('left') : ''"></i>
            <i class="fa fa-angle-double-right" :class="{'date-control-not-allowed': !monthChangeButtonStatus('left','+','Y')}"
             @click="monthChangeButtonStatus('left','+','Y') ? gotoNextY('left') : ''"></i>
          </div>
        </div>
        <div class="flex date-week-box">
          <div v-for="week in weekList" :key="week.key">{{week.val}}</div>
        </div>
        <div class="flex date-box">
          <div class="date-grid" :class="{'date-start-grid': startOrEndGrid(date, 'start'), 'date-end-grid': startOrEndGrid(date, 'end'), 'date-select-grid': startToEndGrid(date), 'date-not-allowed': date.disabled, 'today': date.today}"
           v-for="date in leftDateList" :key="date.key" @click="selectDate(date.key)" @mouseenter="gridEnter(date.key)">
            <span>{{date.val}}</span> 
          </div>
        </div>
      </div>
      <div class="date-end-box">
        <div class="flex flex-align-center flex-pack-justify date-title">
          <div class="date-control-left">
            <i class="fa fa-angle-double-left" :class="{'date-control-not-allowed': !monthChangeButtonStatus('right','-','Y')}"
             @click="monthChangeButtonStatus('right','-','Y') ? gotoLastY('right') : ''"></i>
            <i class="fa fa-angle-left" :class="{'date-control-not-allowed': !monthChangeButtonStatus('right','-','M')}"
             @click="monthChangeButtonStatus('right','-','M') ? gotoLastM('right') : ''"></i>
          </div>
          <div>{{rightDate}}</div>
          <div class="date-control-right">
            <i class="fa fa-angle-right" :class="{'date-control-not-allowed': !monthChangeButtonStatus('right','+','M')}"
             @click="monthChangeButtonStatus('right','+','M') ? gotoNextM('right') : ''"></i>
            <i class="fa fa-angle-double-right" :class="{'date-control-not-allowed': !monthChangeButtonStatus('right','+','Y')}"
             @click="monthChangeButtonStatus('right','+','Y') ? gotoNextY('right') : ''"></i>
          </div>
        </div>
        <div class="flex date-week-box">
          <div v-for="week in weekList" :key="week.key">{{week.val}}</div>
        </div>
        <div class="flex date-box">
          <div class="date-grid" :class="{'date-start-grid': startOrEndGrid(date, 'start'), 'date-end-grid': startOrEndGrid(date, 'end'), 'date-select-grid': startToEndGrid(date), 'date-not-allowed': date.disabled, 'today': date.today}"
           v-for="date in rightDateList" :key="date.key" @click="selectDate(date.key)" @mouseenter="gridEnter(date.key)">
            <span>{{date.val}}</span> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dateRange: [], //选择的日期区间
      dateInputFouce: false,
      // hotKeyList: [{startDate: '', endDate: '', value:'全部时间'},{startDate: '', endDate: '', value:'今天'},{startDate: '', endDate: '', value:'昨天'},{startDate: '', endDate: '', value:'最近3天'},{startDate: '', endDate: '', value:'最近7天'}],
      hotKeyList: [{startDate: '', endDate: '', value:'全部时间'}],
      hotKeySelected: '全部时间',
      dateSelectOpen: false,
      weekList: [{key: 0, val: '日'}, {key: 1, val: '一'}, {key: 2, val: '二'}, {key: 3, val: '三'}, {key: 4, val: '四'}, {key: 5, val: '五'}, {key: 6, val: '六'}],
      leftDateList: [],
      rightDateList: [],
      today: '', //今天的日期
      leftY: '', //开始年
      leftM: '', //开始月
      rightY: '', //结束年
      rightM: '', //结束月
      leftDate: '', //左边日期选择区的年月
      rightDate: '', //右边日期选择区的年月
      selectedDate: [], //选中的数据
      selectedDateStyleControl: [], //控制选中的grid样式
      left: '', //日期组件左定位
      right: '', //日期组件右定位
      translate: '', //日期组件居中对齐控制
    };
  },
  props: {
    value: {
      type: Array,
      default: function () {
        return [];
      },
    },
    position: {
      type: String,
      default: function () {
        return 'right';
      },
    }
  },
  watch: {
    value (val) {
      this.init();
    },
    leftY (val) {
      this.leftDate = `${val} 年 ${this.leftM} 月`;
    },
    leftM (val) {
      this.leftDate = `${this.leftY} 年 ${val} 月`;
    },
    rightY (val) {
      this.rightDate = `${val} 年 ${this.rightM} 月`;
    },
    rightM (val) {
      this.rightDate = `${this.rightY} 年 ${val} 月`;
    },
    leftDate () {
      //生成左边日历
      this.leftDateList = this.generateDateList(this.leftY, this.leftM);
    },
    rightDate () {
      //生成右边日历
      this.rightDateList =this.generateDateList(this.rightY, this.rightM);
    },
    selectedDate (val) {
      if(val.length===2){
        if(val[0]&&val[1]){
          this.dateRange = val;
          let dateRangeArr = [this.dateFilter(val, 'min'), this.dateFilter(val, 'max')];
          this.$emit('input', dateRangeArr);
          this.$emit('select', dateRangeArr);
        }else{
          this.dateRange = [];
          this.$emit('input',[]);
          this.$emit('select', []);
        }
        this.dateInputFouce = false;
        this.dateSelectOpen = false;
        this.selectedDate = [];
      }
    },
  },
  created () {
    //初始化下拉定位位置
    if(this.position){
      switch (this.position) {
        case 'left': 
          this.left = '0px';
          this.right = 'auto';
          this.translate = '';
          break;
        case 'right':
          this.left = 'auto';
          this.right = '0px';
          this.translate = '';
          break;
        case 'center':
          this.left = '50%';
          this.right = 'auto';
          this.translate = 'translate3d(-50%,0px,0px)';
          break;
      }
    }

    //获取今天的日期
    let today = new Date();
    let todayY = today.getFullYear();
    let todayM = today.getMonth()+1;
    let todayD = today.getDate();
    this.today = [todayY, todayM, todayD];

    //初始化选中的状态
    if(this.value&&!this.value.length){
      this.leftY = todayY;
      this.leftM = todayM;
      if(todayM+1>11){
        this.rightY = todayY+1;
        this.rightM = 1;
      }else{
        this.rightY = todayY;
        this.rightM = todayM+1;
      }
    }else{
      this.init();
    }

    //生成内置快捷选项
    this.generateBuiltInHotKey();

    //设置默认选中的快捷键
    if(!this.value){
      this.hotKeySelected = '全部时间';
    }
  },
  mounted () {
    document.querySelector('body').onclick =  () => {
      this.dateInputFouce = false;
      this.dateSelectOpen = false;
    }
  },
  methods: {
    /**
     * 初始化组件
     */
    init () {
      if(this.value&&this.value.length===2){
        let min = this.dateFilter(this.value, 'min'),
            max = this.dateFilter(this.value, 'max');
        let minArr = min.split('-'),
            maxArr = max.split('-');
        if(minArr[0]===maxArr[0] && minArr[1]===maxArr[1]){
          let leftY = ~~minArr[0],
              leftM = ~~minArr[1];
          this.leftY = leftY;
          this.leftM = leftM;
          
          if(leftM+1>11){
            this.rightY = leftY+1;
            this.rightM = 1;
          }else{
            this.rightY = leftY;
            this.rightM = leftM+1;
          }
        }else{
          this.leftY = ~~minArr[0];
          this.leftM = ~~minArr[1];
          this.rightY = ~~maxArr[0];
          this.rightM = ~~maxArr[1];
        }
        
        //设置当前选中的日期区间
        this.dateRange = this.value;

        //样式控制
        this.selectedDateStyleControl = this.value;
      }
    },
    /**
     * 鼠标进入grid格子时，改变grid格子的样式
     * @param {string} date - 日期
     */
    gridEnter (date) {
      if(this.selectedDate.length>0){
        this.selectedDateStyleControl.splice(1, 1, date);
      }
    },
    /**
     * 判断date日期是否是选中的开始到截止的日期
     * @param {object} date - 日期对象
     */
    startToEndGrid (date) {
      if(this.selectedDateStyleControl.length===2){
        let min = this.timestamps(this.dateFilter(this.selectedDateStyleControl, 'min')),
            max = this.timestamps(this.dateFilter(this.selectedDateStyleControl, 'max'));
        if(date.timestamps>=min && date.timestamps<=max){
          return true;
        }
      }
    },
    /**
     * 将一个类似2018-01-01格式的日期转为时间戳
     * @param {string} date - 日期字符串
     */
    timestamps (date) {
      if(date){
        let arr = date.split('-');
        if(arr.length===3){
          return Date.parse(new Date(~~arr[0], ~~arr[1], ~~arr[2]));
        }
      }
      return 0;
    },
    /**
     * 判断date日期是否是选择的日期
     * @param {object} date - 日期对象
     * @param {string} type - 开始||结束
     */
    startOrEndGrid (date, type) {
      if(type==='start'){
        if(this.selectedDateStyleControl.length===1){
          if(date.key===this.selectedDateStyleControl[0]){
            return true;
          }
        }else if(this.selectedDateStyleControl.length===2){
          let min = this.dateFilter(this.selectedDateStyleControl, 'min')
          if(date.key===min){
            return true;
          }
        }
      }else if(type==='end'){
        if(this.selectedDateStyleControl.length===2){
          let max = this.dateFilter(this.selectedDateStyleControl, 'max')
          if(date.key===max){
            return true;
          }
        }
      }
    },
    /**
     * 生成内置快捷选项
     */
    generateBuiltInHotKey () {
      if(this.today){
        let Y = this.today[0],
            M = this.today[1],
            D = this.today[2];
        let todayObj = {          
          startDate: `${Y}-${M>9?M:'0'+M}-${D>9?D:'0'+D}`, 
          endDate: `${Y}-${M>9?M:'0'+M}-${D>9?D:'0'+D}`, 
          value:'今天'
        };
        let yesterday = new Date(Date.parse(new Date(Y, M-1, D))-24*60*60*1000);
        let Y2 = yesterday.getFullYear(),
            M2 = yesterday.getMonth()+1,
            D2 = yesterday.getDate();
        let yesterdayObj = {
          startDate: `${Y2}-${M2>9?M2:'0'+M2}-${D2>9?D2:'0'+D2}`,
          endDate: `${Y2}-${M2>9?M2:'0'+M2}-${D2>9?D2:'0'+D2}`,
          value: '昨天',
        };
        let lastThreeDays = new Date(Date.parse(new Date(Y, M-1, D))-2*24*60*60*1000);
        let Y3 = lastThreeDays.getFullYear(),
            M3 = lastThreeDays.getMonth()+1,
            D3 = lastThreeDays.getDate();
        let lastThreeDaysObj = {
          startDate: `${Y3}-${M3>9?M3:'0'+M3}-${D3>9?D3:'0'+D3}`,
          endDate: `${Y}-${M>9?M:'0'+M}-${D>9?D:'0'+D}`,
          value: '最近3天',
        };
        let lastSevenDays = new Date(Date.parse(new Date(Y, M-1, D))-6*24*60*60*1000);
        let Y4 = lastSevenDays.getFullYear(),
            M4 = lastSevenDays.getMonth()+1,
            D4 = lastSevenDays.getDate();
        let lastSevenDaysObj = {
          startDate: `${Y4}-${M4>9?M4:'0'+M4}-${D4>9?D4:'0'+D4}`,
          endDate: `${Y}-${M>9?M:'0'+M}-${D>9?D:'0'+D}`,
          value: '最近7天',
        };
        this.hotKeyList = this.hotKeyList.concat([todayObj, yesterdayObj, lastThreeDaysObj, lastSevenDaysObj]);
      }
    },
    /**
     * 选择日期
     * @param {string} date - 选中的日期
     */
    selectDate (date) {
      if(this.selectedDate.length<2){
        //样式控制
        if(this.selectedDate.length===0){
          this.selectedDateStyleControl = [date];
        }else if(this.selectedDate.length===1){
          this.selectedDateStyleControl.splice(1, 1, date);
        }

        //选中数据
        this.selectedDate.push(date);
        if(this.selectedDate.length===2){
          this.hotKeySelected = '';
        }
      }
    },
    /**
     * 跳转到上一年
     * @param {string} dateType - 左侧日历还是右侧日历，left||right
     */
    gotoLastY (dateType) {
      if(dateType==='left'){
        this.leftY = this.leftY-1;
      }else if(dateType==='right'){
        this.rightY = this.rightY-1;
      }
    },
    /**
     * 跳转到下一年
     * @param {string} dateType - 左侧日历还是右侧日历，left||right
     */
    gotoNextY (dateType) {
      if(dateType==='left'){
        this.leftY = this.leftY+1;
      }else if(dateType==='right'){
        this.rightY = this.rightY+1;
      }
    },
    /**
     * 跳转到上一月
     * @param {string} dateType - 左侧日历还是右侧日历，left||right
     */
    gotoLastM (dateType) {
      if(dateType==='left'){
        if(this.leftM>1){
          this.leftM = this.leftM-1;
        }else{
          this.leftY = this.leftY-1;
          this.leftM = 12;
        }
      }else if(dateType==='right'){
        if(this.rightM>1){
          this.rightM = this.rightM-1;
        }else{
          this.rightY = this.rightY-1;
          this.rightM = 12;
        }
      }
    },
    /**
     * 跳转到下一月
     * @param {string} dateType - 左侧日历还是右侧日历，left||right
     */
    gotoNextM (dateType) {
      if(dateType==='left'){
        if(this.leftM<12){
          this.leftM = this.leftM+1;
        }else{
          this.leftY = this.leftY+1;
          this.leftM = 1;
        }
      }else if(dateType==='right'){
        if(this.rightM<12){
          this.rightM = this.rightM+1;
        }else{
          this.rightY = this.rightY+1;
          this.rightM = 1;
        }
      }
    },
    /**
     * 年份/月份跳转按钮是否可以点击
     * @param {string} dateType - 左侧日历还是右侧日历，left||right
     * @param {string} addOrSub - 加或者减，+||-
     * @param {string} buttonType - 年或者月，Y||M
     */
    monthChangeButtonStatus (dateType, addOrSub, buttonType) {
      if(dateType==='left'){
        if(addOrSub==='+'){
          if(buttonType==='Y'){
            if(this.leftY+1<this.rightY){
              return true;
            }else if(this.leftY+1===this.rightY){
              if(this.leftM<this.rightM){
                return true;
              }
            }
          }else if(buttonType==='M'){
            if(this.leftY+1<this.rightY){
              return true;
            }else if(this.leftY+1===this.rightY){
              if(!(this.leftM===12 && this.rightM===1)){
                return true;
              }
            }else if(this.leftY===this.rightY){
              if(this.leftM+1<this.rightM){
                return true;
              }
            }
          }
        }else if(addOrSub==='-'){
          if(buttonType==='Y'){
            if(this.leftY>1911){
              return true;
            }
          }else if(buttonType==='M'){
            if(this.leftY===1911){
              if(this.leftM>=2){
                return true;
              }
            }else if(this.leftY>1911){
              return true;
            }
          }
        }
      }else if(dateType==='right'){
        if(addOrSub==='+'){
          if(buttonType==='Y'){
            if(this.rightY<2046){
              return true;
            }
          }else if(buttonType==='M'){
            if(this.rightY===2046){
              if(this.rightM<=11){
                return true;
              }
            }else if(this.rightY<2046){
              return true;
            }
          }
        }else if(addOrSub==='-'){
          if(buttonType==='Y'){
            if(this.rightY>this.leftY+1){
              return true;
            }else if(this.rightY===this.leftY+1){
              if(this.rightM>this.leftM){
                return true;
              }
            }
          }else if(buttonType==='M'){
            if(this.leftY+1<this.rightY){
              return true;
            }else if(this.leftY+1===this.rightY){
              if(!(this.rightM===1 && this.leftM===12)){
                return true;
              }
            }else if(this.leftY===this.rightY){
              if(this.leftM+1<this.rightM){
                return true;
              }
            }
          }
        }
      }
    },
    /**
     * 根据年月生成日期数据列表
     * @param {number} Y - 年
     * @param {number} M - 月
     */
    generateDateList (Y, M) {
      let days = [];
      let lastMonthDayNum = this.computedWeek(Y, M, 1);
      let lastMonthDays, lastMonthAllDays, lastMonthY, lastMonthM;
      if(M>1){
        lastMonthY = Y;
        lastMonthM = M-1;
      }else{
        lastMonthY = Y-1;
        lastMonthM = 12;
      }
      lastMonthAllDays = this.getDays(lastMonthY, lastMonthM);
      let thisMonthFirstDayWeek = this.computedWeek(Y, M, 1);
      lastMonthDays = thisMonthFirstDayWeek===0?7:thisMonthFirstDayWeek;
      
      for(let i=lastMonthAllDays-lastMonthDays+1, j=0; j<lastMonthDays; i++, j++){
        days.push({
          key: `${lastMonthY}-${lastMonthM>9?lastMonthM:'0'+lastMonthM}-${i>9?i:'0'+i}`,
          timestamps: Date.parse(new Date(lastMonthY, lastMonthM, i)),
          val: i,
          week: this.computedWeek(lastMonthY, lastMonthM, i),
          disabled: true,
          today: this.isToday(lastMonthY, lastMonthM, i),
        });
      }

      let monthDays = this.getDays(Y, M);
      for(let i=1; i<=monthDays; i++){
        days.push({
          key: `${Y}-${M>9?M:'0'+M}-${i>9?i:'0'+i}`,
          timestamps: Date.parse(new Date(Y, M, i)),
          val: i,
          week: this.computedWeek(Y, M, i),
          disabled: false,
          today: this.isToday(Y, M, i),
        });
      }

      let nextMonthDays = 6*7-days.length;
      let nextMonthY, nextMonthM;
      if(M>11){
        nextMonthY = Y+1;
        nextMonthM = 1;
      }else{
        nextMonthY = Y;
        nextMonthM = M+1;
      }
      for(let i=1; i<=nextMonthDays; i++){
        days.push({
          key: `${nextMonthY}-${nextMonthM>9?nextMonthM:'0'+nextMonthM}-${i>9?i:'0'+i}`,
          timestamps: Date.parse(new Date(nextMonthY, nextMonthM, i)),
          val: i,
          week: this.computedWeek(nextMonthY, nextMonthM, i),
          disabled: true,
          today: this.isToday(nextMonthY, nextMonthM, i),
        });
      }
      return days;
    },
    /**
     * 计算Y年M月D日是不是今天
     * @param {number} Y - 年
     * @param {number} M - 月
     * @param {number} D - 日
     */
    isToday (Y, M, D) {
      if(this.today){
        if(Y===this.today[0] && M===this.today[1] && D===this.today[2]){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    },
    /**
     * 计算Y年M月D日是周几
     * @param {number} Y - 年
     * @param {number} M - 月
     * @param {number} D - 日
     */
  	computedWeek (Y, M, D) {
  		return new Date(Y,M>0?M-1:M,D).getDay();
  	},
    /**
     * 判断是否是闰年
     * @param {number} Y - 年
     */
  	isLeapYear (Y) {
  		if(typeof Y !== 'number') return;
  		return ((Y%4==0 && Y%100!=0) || (Y%100==0 && Y%400==0));
  	},
    /**
     * 计算某一个月的天数
     * @param {number} Y - 年
     * @param {number} M - 月
     */
  	getDays (Y, M) {
  		const self = this;
  		let day31 = [1, 3, 5, 7, 8, 10, 12];
  		
      let day31Status = day31.some((item, index) => {
        return item===M;
      });
      if(day31Status){
        return 31;
      }else{
        if(M===2 && self.isLeapYear(Y)){
          return 29;
        }else if(M===2 && !self.isLeapYear(Y)){
          return 28;
        }else{
          return 30;
        }
      }
  	},
    toggle () {
      this.dateInputFouce = !this.dateInputFouce;
      this.dateSelectOpen = !this.dateSelectOpen;
    },
    dateFilter (dateRange, status) {
      if(dateRange.length==2){
        let date1 = dateRange[0].split('-');
        let date1Timestamps = Date.parse(new Date(~~date1[0], ~~date1[1]-1, ~~date1[2]));
        let date2 = dateRange[1].split('-');
        let date2Timestamps = Date.parse(new Date(~~date2[0], ~~date2[1]-1, ~~date2[2]));
        let min, max;
        if(date1Timestamps > date2Timestamps){
          min = dateRange[1];
          max = dateRange[0];
        }else if(date1Timestamps < date2Timestamps){
          min = dateRange[0];
          max = dateRange[1];
        }else{
          min = max = dateRange[0];
        }
        if(status === 'min'){
          return min;
        }else if(status === 'max'){
          return max;
        }
      }
    },
    selectHotKey (hotKey) {
      this.hotKeySelected = hotKey.value;
      this.selectedDate = [hotKey.startDate, hotKey.endDate];

      //样式控制
      this.selectedDateStyleControl = [hotKey.startDate, hotKey.endDate];
    }
  },
}
</script>
<style scoped>
  .date-range-picker{
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    width: 250px;
    min-width: 230px;
    height: 35px;
    font-size: 13px;
    color: #363636;
    cursor: pointer;
  }
  .date-input{
    width: 100%;
    height: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
  }
  .date-input:hover{
    border-color: #acacac;
  }
  .date-range-picker .date-input-fouce{
    border-color: #4c81eb;
    box-shadow: 0px 0px 5px #8e8fff;
  }
  .date-input > span{
    margin-left: 12px;
    max-width: 190px;
  }
  .date-input > i{
    margin-right: 12px;
  }
  .date-select-box{
    z-index: 100;
    position: absolute;
    right: 0px;
    top: 100%;
    margin-top: 3px;
    background-color: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    box-shadow: 0px 0px 5px #dbdbdb;
    cursor: auto;
  }
  .hot-key-box{
    height: 100%;
  }
  .hot-key{
    min-width: 100px;
    font-size: 13px;
    color: #363636;
    padding-left: 20px;
    padding-right: 20px;
    line-height: 2.5;
    cursor: pointer;
  }
  .hot-key:hover, .hot-key-select{
    color: #4c81eb;
  }
  .date-start-box, .date-end-box{
    width: 323px;
    padding: 20px;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
  }
  .date-end-box{
    border: none;
  }
  .date-start-box > div, .date-end-box > div{
    width: 100%;
  }
  .date-title{
    height: 30px;
    font-size: 16px;
    font-weight: 500;
    color: #606266;
    line-height: 1;
  }
  .date-control-left, .date-control-right{
    font-size: 12px;
    color: #303133;
    line-height: 1;
  }
  .date-control-left > i, .date-control-right > i{
    padding-left: 7px;
    padding-right: 7px;
    cursor: pointer;
  }
  .date-control-left > i.date-control-not-allowed, .date-control-right > i.date-control-not-allowed{
    color: #bbb;
    cursor: not-allowed;
  }
  .date-week-box > div, .date-box > div{
    width: 40px;
    height: 38px;
    padding: 5px;
    text-align: center;
    line-height: 23px;
    font-size: 12px;
    color: #606266;
    border-top: 2.5px solid #ffffff;
    border-bottom: 2.5px solid #ffffff;
    box-sizing: border-box;
  }
  .date-box > div{
    cursor: pointer;
  }
  .date-box > div > span{
    display: block;
    width: 23px;
    height: 100%;
    margin: 0 auto;
  }
  .date-box > div.today, .date-box > div:hover{
    color: #409eff;
  }
  .date-box{
    flex-wrap: wrap;
    border-top: 1px solid #e8ebf4;
  }
  .date-box > .date-select-grid{
    background-color: #f2f6fc;
  }
  .date-box > .date-start-grid{
    border-radius: 50% 0px 0px 50%;
  }
  .date-box > .date-end-grid{
    border-radius: 0px 50% 50% 0px;
  }
  .date-box > .date-start-grid.date-end-grid{
    border-radius: 50%;
  }
  .date-box > .date-start-grid > span, .date-box > .date-end-grid > span{
    color: #ffffff;
    background-color: #409eff;
    border-radius: 50%;
  }
  .date-box > .date-not-allowed{
    color: #bbb;
    background-color: #ffffff; 
  }
  .date-box > .date-not-allowed > span{
    color: #bbb;
    background-color: #ffffff;
  }
</style>
