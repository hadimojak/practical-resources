function Node(val){
    this.val = val;
    this.next = null;
};

function LinkedList(){
    this.head = null;
    this.insert = function(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
    }
}

var addToArrayForm = function(num, num2) {
    return String(BigInt(num.join('')) + BigInt(num2.join(''))).split('');
};


console.log([2,3,4],[4,5,6])