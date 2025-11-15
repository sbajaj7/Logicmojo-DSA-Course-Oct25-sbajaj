class LRUCache {

    final Node head = new Node(0,0);
    final Node tail = new Node(0,0);
    Map<Integer, Node> map;
    int capacity;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>(capacity);
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        int res = -1;
        Node node = map.get(key);
        if(node != null){
            res = node.val;
            remove(node);
            add(node);
        }
        return res;
    }
    
    public void put(int key, int value) {
        if(map.containsKey(key)){
            Node node = map.get(key);
            remove(node);
            node.val = value;
            add(node);
        } else {
            if(capacity == map.size()){
                map.remove(tail.prev.key);
                remove(tail.prev);
            }
            
            Node node = new Node(key, value);
            map.put(key,node);
            add(node);
        }
    }
    
    public void add(Node node){
        Node head_next = head.next;
        node.next = head_next;
        head_next.prev = node;
        
        head.next = node;
        node.prev = head;
    }
    
    public void remove(Node node){
        Node next_node = node.next;
        Node prev_node = node.prev;
        
        prev_node.next = next_node;
        next_node.prev = prev_node;
    }
    
    class Node {
        int key;
        int val;
        Node next;
        Node prev;
        Node (int key, int val){
            this.key = key;
            this.val = val;
        }
    }
}
