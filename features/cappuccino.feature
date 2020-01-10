Feature:
As a coffee buyer
I want a coffee machine that
I can put coins in and get change back
or pay with bank card
and get a cup of cappuccino back
with sugar or without sugar
because I like cappuccino and crave caffeine.

  Background: Coffe machine basic
    Given that the machine is plugged in
    And that water is available

  Scenario Outline: buy Cappuccino with coins
    And that the machine has enough ground coffee
    And the machine has plastic cups
    When the user presses the "Cappuccino" button
    When the user inserts a <money1> kr coin
    And the user inserts a <money2> kr coin
    And the user inserts a <money3> kr coin
    And the user inserts a <money4> kr coin
    And presses the "start" button
    Then the user recieves <cup> cup of cappuccino.

    Examples:
      | money1     | money2 | money3 | money4 | cup |
      | 10         | 10     | 0      | 0      | 1   |
      | 5          | 5      | 5      | 5      | 1   |
      | 10         | 0      | 0      | 0      | 0   |
      | "byxknapp" | 1      | 0      | 0      | 0   |
      | 5          | 0      | 0      | 0      | 0   |