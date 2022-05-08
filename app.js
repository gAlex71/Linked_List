//Linked List
//Каждый элемент списка точно знает про следующий элемент
//[value, next] -> [value, next]

class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        //Первый элемент
        this.head = null
        //Последний элемент
        this.tail = null
    }

    //Функция добавления элемента в конец
    append(data){
        const node = new Node(data)
        //Если есть последний элемент, то указываем на следующий
        if(this.tail){
            this.tail.next = node
        }
        // Если первого элемента нету, то присваиваем ему значение
        if(!this.head){
            this.head = node
        }
        this.tail = node
    }

    //Добавление элемента в начало
    prepend(data){
        const node = new Node(data, this.head)
        this.head = node
        //Если список еще не определен
        if(!this.tail){
            this.tail = node
        }
    }

    //Найти элемент в связаном списке
    find(data){
        if(!this.head){
            console.log('Null List!');
        }

        let current = this.head
        while(current){
            if(current.data === data){
                return current
            }
            current = current.next
        }
    }

    //Добавление элемента После другого
    insertAfter(after, data){
        const found = this.find(after)
        if(!found){
            return
        }
        found.next = new Node(data, found.next)
    }

    //Приводим связный список к массиву
    toArray(){
        const output = []
        let current = this.head
        //Итерируемся, пока есть элементы
        while(current){
            output.push(current)
            //Переходим к следующему элементу
            current = current.next
        }
        return output
    }

    //Удаление
    remove(data){
        if(!this.head){
            return
        }

        while(this.head && this.head.data === data){
            this.head = this.head.next
        }

        let current = this.head
        //Пока существует следующий элемент
        while(current.next){
            if(current.next.data === data){
                //remove
                current.next = current.next.next
            }else{
                current = current.next
            }
        }

        if(this.tail.data === data){
            this.tail = current
        }
    }
}

const list = new LinkedList()
list.append('My')
list.append('name')
list.prepend('Hi')
list.append('is')
list.append('Slim')
list.append('Boy')

console.log(list.find('name')); 
// console.log(list.toArray());