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

  //BASIC POWER FLOWER
  event.remove({ output: 'projectexpansion:basic_power_flower' })
  event.recipes.extendedcrafting.shaped_table(
    'projectexpansion:basic_power_flower', [
        'EDADE',
        'DACAD',
        'ACBCA',
        'DACAD',
        'EDADE'
    ], {
      A: 'projectexpansion:basic_compressed_collector', 
      B: 'projectexpansion:basic_emc_link',
      C: 'projectexpansion:basic_relay',
      D: 'projecte:aeternalis_fuel',
      E: 'mysticalagriculture:inferium_essence'
    }
  )

  //DARK POWER FLOWER
  event.remove({ output: 'projectexpansion:dark_power_flower' })
  event.recipes.extendedcrafting.shaped_table(
    'projectexpansion:dark_power_flower', [
        'FFDADFF',
        'FDACADF',
        'DAECEAD',
        'ACCBCCA',
        'DAECEAD',
        'FDACADF',
        'FFDADFF'
    ], {
      A: 'projectexpansion:dark_compressed_collector', 
      B: 'projectexpansion:dark_emc_link',
      C: 'projectexpansion:dark_relay',
      D: 'projecte:dark_matter',
      E: 'projectexpansion:basic_power_flower',
      F: 'mysticalagriculture:inferium_essence'
    }
  )

})