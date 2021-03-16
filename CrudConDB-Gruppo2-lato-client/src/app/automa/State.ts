export interface State{
    next(event :Event): State;
}