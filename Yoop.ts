export class Node {
  public id: string
    constructor() {
      this.id = String(Math.random())
    }
    public getId(): string {
      // This ID will always be unique for each instance of Node.
      return this.id
    }
  }
  
  export class Container {
    public map: Map<string, Node>
    public keys: Array<string>
    constructor() {
      this.map = new Map()
      this.keys = []
    }
  
    public add(node: Node): void {
      this.map[node.getId()] = node
      this.keys.push(node.getId())
    }
  
    public remove(node: Node): void {
      delete this.map[node.getId()]
      
    }
  
    public getRandom(): Node | null {
      if (this.keys.length === 0) return null
      // Math.random() - returns a decimal between 0 and 1.
      const index = Math.floor(Math.random() * (this.keys.length - 1))
      const randomKey = this.keys[index]
      return this.map.get(randomKey)
      
    }
  }