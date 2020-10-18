/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNoteInput = {
  id?: string | null
  client?: string | null
  name: string
  description?: string | null
  completed?: boolean | null
}

export type ModelNoteConditionInput = {
  client?: ModelIDInput | null
  name?: ModelStringInput | null
  description?: ModelStringInput | null
  completed?: ModelBooleanInput | null
  and?: Array<ModelNoteConditionInput | null> | null
  or?: Array<ModelNoteConditionInput | null> | null
  not?: ModelNoteConditionInput | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type ModelBooleanInput = {
  ne?: boolean | null
  eq?: boolean | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type UpdateNoteInput = {
  id: string
  client?: string | null
  name?: string | null
  description?: string | null
  completed?: boolean | null
}

export type DeleteNoteInput = {
  id?: string | null
}

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null
  client?: ModelIDInput | null
  name?: ModelStringInput | null
  description?: ModelStringInput | null
  completed?: ModelBooleanInput | null
  and?: Array<ModelNoteFilterInput | null> | null
  or?: Array<ModelNoteFilterInput | null> | null
  not?: ModelNoteFilterInput | null
}

export type CreateNoteMutationVariables = {
  input: CreateNoteInput
  condition?: ModelNoteConditionInput | null
}

export type CreateNoteMutation = {
  createNote: {
    __typename: 'Note'
    id: string
    client: string | null
    name: string
    description: string | null
    completed: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput
  condition?: ModelNoteConditionInput | null
}

export type UpdateNoteMutation = {
  updateNote: {
    __typename: 'Note'
    id: string
    client: string | null
    name: string
    description: string | null
    completed: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput
  condition?: ModelNoteConditionInput | null
}

export type DeleteNoteMutation = {
  deleteNote: {
    __typename: 'Note'
    id: string
    client: string | null
    name: string
    description: string | null
    completed: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type GetNoteQueryVariables = {
  id: string
}

export type GetNoteQuery = {
  getNote: {
    __typename: 'Note'
    id: string
    client: string | null
    name: string
    description: string | null
    completed: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListNotesQuery = {
  listNotes: {
    __typename: 'ModelNoteConnection'
    items: Array<{
      __typename: 'Note'
      id: string
      client: string | null
      name: string
      description: string | null
      completed: boolean | null
      createdAt: string
      updatedAt: string
    } | null> | null
    nextToken: string | null
  } | null
}

export type Note = {
  name: string
  id: string | null
  client: string | null
  description: string | null
  completed: boolean | null
  createdAt: string | null
  updatedAt: string | null
}

export type OnCreateNoteSubscription = {
  onCreateNote: {
    __typename: 'Note'
    id: string
    client: string | null
    name: string
    description: string | null
    completed: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateNoteSubscription = {
  onUpdateNote: {
    __typename: 'Note'
    id: string
    client: string | null
    name: string
    description: string | null
    completed: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteNoteSubscription = {
  onDeleteNote: {
    __typename: 'Note'
    id: string
    client: string | null
    name: string
    description: string | null
    completed: boolean | null
    createdAt: string
    updatedAt: string
  } | null
}
