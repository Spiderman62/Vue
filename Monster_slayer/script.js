function getValueRandom(max,min){
	return Math.floor(Math.random() * (max - min) + 5);
}
Vue.createApp({
	data(){
		return{
			monsterHealth:100,
			playerHealth:100,
			currentMatch:0,
			winner:null,
			logMessages:[]
		}
	},
	watch:{
		monsterHealth(value){
			if(value <= 0 && this.playerHealth <= 0){
				this.winner = 'draw';
			}else if(value <= 0){
				this.winner = 'win'
			}
		},
		playerHealth(value){
			if(value <= 0 && this.monsterHealth <= 0){
				this.winner = 'draw';
			}else if(value <= 0){
				this.winner = 'lost'
			}
		}
	},
	computed:{
		monsterBarStyle(){
			if(this.monsterHealth <= 0){
				return {width: 0};
			}
			return {width: this.monsterHealth + '%'};
		},
		playerBarStyle(){
			if(this.playerHealth <= 0){
				return {width: 0};
			}
			return {width: this.playerHealth + '%'};
		},
		disabledAttack(){
			return this.currentMatch % 3 !== 0;
		}
	},
	methods:{
		newGame(){
			this.monsterHealth = 100;
			this.playerHealth = 100;
			this.currentMatch = 0;
			this.winner = null;
			this.logMessages = [];
		},	
		attackMonster(){
			this.currentMatch++;
			const attackValue = getValueRandom(12,5);
			this.monsterHealth -= attackValue;
			this.infoLogMessages('player','attack',attackValue);
			this.attackPlayer();
		},
		attackPlayer(){
			const attackValue = getValueRandom(15,8);
			this.playerHealth -= attackValue;
			this.infoLogMessages('monster','attack',attackValue);
		},
		specialAttack(){
			this.currentMatch++;
			const attackValue = getValueRandom(25,10);
			this.monsterHealth -= attackValue;
			this.infoLogMessages('player','special-attack',attackValue);
			this.attackPlayer();
		},
		healPlayer(){
			this.currentMatch++;
			const healValue = getValueRandom(20,8);
			if(this.playerHealth + healValue > 100){
				this.playerHealth = 100;
			}else{
				this.playerHealth += healValue;
			}
			this.infoLogMessages('player','heal',healValue);
			this.attackPlayer();
		},
		surrender(){
			this.playerHealth = 0;
		},
		infoLogMessages(who,what,value){
			this.logMessages.unshift({
				actionBy:who,
				actionType:what,
				actionValue:value
			});
		}
	}
}).mount('#game');