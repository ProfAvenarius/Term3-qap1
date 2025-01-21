## QAP 1 for FullStack JavaScript in Term 3 for class SD12.

  ### Password Generator CLI application developed in Node.js.  

  Enter 'node index.js' while in QAP1 directory in a terminal.  
  Default output is a 8 character password utilizing lower case letters.  
  Use flags to modify command, no flag results in default output.  

    '--length xxx': returns a password of a number characters
                    as specified by a trailing number, for a password
                    of 10 characters we would enter '--length 10'. If
                    no number is entered length defaults to 8.          
                    Maximum number of characters avalable is 3,000,000. 

    '--help':       Returns instructions.                 

    '--caps':       Adds capital letters to password, there is a    
                    50% chance of each character becoming uppercase.     

    '--sym':        Adds symbols to password, there is a 20% chance  
                    of any character being a symbol '!,@,#,$,%,&,*,?'.  

    '--num':        Adds numbers to password, there is a 20% chance  
                    of any character being of '1,2,3,4,5,6,7,8,9,0'.     

Example: Entering the following command:                  
            node index.js --length 20 --num --sym --caps        
         Returns:                                                          
            Your 20 character Password is: s?A%HeDij&8cBJzr8O3$
