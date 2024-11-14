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

    //CREATIVE VENDING UPGRADE
    event.recipes.extendedcrafting.shaped_table(
      'functionalstorage:creative_vending_upgrade', [
          'A         B',
          'A          ',
          'A          ',
          'A          ',
          'A          ',
          'A          ',
          'A          ',
          'A          ',
          'A          ',
          'A          ',
          'A          '
      ], {
        A: 'minecraft:stick', 
        B: 'minecraft:dirt'           
      }
  )
})