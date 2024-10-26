ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:crafting_table' })

    event.shaped('3x minecraft:crafting_table', [
        'AB ', 
        '   ',
        '   '  
      ], {
        A: 'minecraft:stick', 
        B: 'minecraft:dirt'  
      }
    )
})