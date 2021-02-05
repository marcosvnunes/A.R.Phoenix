/**
 * Actions Types
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

 /**
  * Data types
  */
 export interface User {
   id: number
   name: string
   email: string
   password: string
   birthdayDate:string
   role: 'administrador'| 'colaborador'|'gerente'
 }
  /**
   * State type
   * readonly: somente leitura o estado é imutável
   */
   export interface RepositoriesState {
    readonly users: User[]
    readonly loading: boolean
    readonly error: boolean
   }
