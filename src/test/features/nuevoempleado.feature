Feature: Creación de nuevos empleados en OrangeHRM
  Como administrador
  Quiero poder agregar nuevos empleados al sistema
  Para mantener actualizada la lista de empleados.



  Background:
    Given el administrador está autenticado en el sistema OrangeHRM

  Scenario: Crear un nuevo empleado con datos completos
    When el administrador navega a la sección PIM
    And el administrador hace clic en el botón Add
    And el administrador completa los datos del empleado con:

      | primernombre   | segundonombre | apellidos | id_empleado     | username   | password | confirmar_password |
      | Luis   | Marcelo     | Rojas     | 700011   | lmarcero | admin123 | admin123            |
   
    And el administrador guarda el empleado
    Then completa la demás informacion con:

    | OtherId   | Drivers_License | LicenseExpiry | Birth |
      | 2222    | 545454  | 2024-12-12 | 1999-14-06 |

    Then valida el nuevo empleado con ID "700011"



      

