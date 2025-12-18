BEGIN
    Initialize length_counter = 0
    Initialize word_counter = 0
    Initialize vowel_counter = 0
    
    Initialize a variable previous_char = ' '  // to help detect word boundaries (starts as space)
    
    PRINT "Enter a sentence ending with a point (.): "
    
    REPEAT
        Read next character into current_char (character by character)
        
        // Count every character (including spaces, but excluding the final point? Wait — instructions say include all)
        // But "the last character is the point" and we read until we get it
        length_counter = length_counter + 1
        
        // Check if current character is a vowel (case insensitive)
        IF current_char is 'a' OR 'e' OR 'i' OR 'o' OR 'u' OR
           'A' OR 'E' OR 'I' OR 'O' OR 'U' THEN
            vowel_counter = vowel_counter + 1
        END IF
        
        // Detect start of a new word: when we see a non-space after a space
        IF previous_char == ' ' AND current_char != ' ' AND current_char != '.' THEN
            word_counter = word_counter + 1
        END IF
        
        // Update previous_char for next iteration
        previous_char = current_char
        
    UNTIL current_char == '.'   // stop when we read the final point
    
    // Since the point itself is a character, it was counted in length — that's correct
    // But the point should NOT start a new word — our condition above already handles that
    
    PRINT "Length of the sentence (including spaces and point): ", length_counter
    PRINT "Number of words: ", word_counter
    PRINT "Number of vowels: ", vowel_counter
END