


var friends = ["Jake", "Fatts", "Austin", "Ryan", "Katie"]
var locations = ['Library', 'Game Room', 'Office', 'Bedroom', 'Mancave', 'Sheshed', 'Aquarium', 'Concert Hall', 'Living Room', 'Doghouse']
var weapons = ['Knife', 'Pistol', 'Rifle', 'Nerf Bat', 'Grenade', 'Taylor Swift Music', 'Rope', 'Rocket Launcher', 'Apathetic Attitude', 'Attack Dog', 'Kitten', 'Pet Shark', 'Mace', 'Boomstick', 'The Ring of Power', 'Mortar', 'Cringe Accent', 'Nuke', 'Divorce Papers', '2nd Mortgage' ]





for ( var i = 0; i < 101; i++) {
    var heading = $('<h3>Accusation: ' + i + '</h3>');
    $('body').append(heading);
    if (i === 0) {
      heading.hide();
    }
    heading.click(clickEvent(i)); 

    function clickEvent(i) {
        return function() {
          alert('I accuse ' + friends[i % friends.length] + ', with the ' + weapons[i % weapons.length] + ' in the ' + locations[i % locations.length] + '!');
        }
      }
  };
  
 

