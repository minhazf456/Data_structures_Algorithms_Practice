/// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

funcrion isValid(code){
    const openerToClosers= {
        '(': ')',
        '[': ']',
        '{': '}',
      };

      const openers = new set (['(', '[', '{']);
      const closers = new Set([')', ']', '}']);

      const openersStack = [ ];

      for ( let i = 0; i < code.lenght; i++) {
          const char = code.charAt(i);

          if (openers.has(char)) {
              openersStack.push(char);
          }
          else if (closers.has(char)){
              if(!openersStack.length){
                  return false;
              }
          }
          const lastclosedOperner = openersStack.pop();

          /// if this closer doesnt correspond to the most recently
          // seen unclosed opener, short-circuit, returning false

          if (openerToClosers[lastclosedOperner]) !== char) {
              returm false;
          }
      }
      return openersStack.length ===0;
}


/// COmplexity 
// O(n) time (one iteration through the string), and O(n)
//space (in the worst case, all of our characters are openers, so we push them all onto the stack).