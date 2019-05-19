import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RoomStateProps, RoomDispatchProps, RoomProps } from '../../types/components/RoomTypes';
import { AppState } from '../../types/store/StoreTypes';
import { deleteRoom, fetchRooms, updateRoomName, selectRoom } from '../../store/actions/RoomActions';
import { RoomModel } from '../../types/model/Room';
import { RoomState } from '../../types/store/RoomReducerTypes';
import { editOrSave, deleteEntity, renderEditButtons, getHiddenProperty } from '../../types/util/Editable';
import EditorList from '../editorlist/EditorList';

export class Room extends React.Component<RoomProps, RoomState> {

    constructor(props: Readonly<RoomProps>) {
        super(props);
        this.props.fetchRooms();
        this.state = {
            rooms: props.rooms,
            selectedRoom: props.rooms[0],
            editing: false,
            filter: '',
            newRoomTitle: props.rooms[0].title,
            isNewMode: false
        };
    }

    componentWillReceiveProps(newProps: RoomProps) {
        this.setState({
            selectedRoom: newProps.selectedRoom,
            newRoomTitle: newProps.selectedRoom.title,
            isNewMode: newProps.isNewMode,
            editing: newProps.editing
        });
    }

    render(): React.ReactNode {
        const filteredRooms: RoomModel[] = [];
        this.props.rooms.forEach((room) => {
            if (room.title.includes(this.state.filter)) {
                filteredRooms.push(room);
            }
        });
        return (<EditorList items={filteredRooms}
            activeItem={this.state.selectedRoom}
            onSelect={this.selectRoom}
            renderEditor={this.renderRoomEditor}
            keyExtractor={(room) => room.id.toString()}
            onFilter={newFilter => this.setState({ filter: newFilter })}
            titleExtractor={(room) => room.title}
            addItem={this.newRoom} />);
    }

    private renderRoomEditor = () => {
        return (
            <div className='col-lg-10'>
                <div className='row justify-content-center'>
                    <div className='col-lg-5'>
                        <Form.Control type='text'
                            className='flex-fill'
                            value={this.state.newRoomTitle}
                            disabled={!this.state.editing}
                            onChange={(e: any) => this.editTitle(e)}
                        />
                        {this.renderEditButtons()}
                        <Button style={getHiddenProperty(this.state)} onClick={(e: any) => this.deleteRoom()} className='w-100 mt-2'>
                            Delete
                        </Button>
                    </div>

                </div>
            </div>
        );
    }

    private newRoom = (): void => {
        this.setState({
            newRoomTitle: 'New Room',
            editing: true,
            isNewMode: true
        });
    }

    private editTitle = (e: any): void => {
        this.setState({ newRoomTitle: e.target.value });
    }

    private renderEditButtons = (): JSX.Element =>
        renderEditButtons(
            this.state.editing,
            this.cancelOrCommenceEdit,
            this.state,
            this.editOrSaveIsDisabled,
            this.editOrSave
        )

    private editOrSave = (): void => {
        editOrSave(
            this.state,
            `Edit Room Title`,
            () => {
                this.props.saveRoom(this.state.selectedRoom.id, this.state.newRoomTitle, this.state.isNewMode);
                this.props.fetchRooms();
            },
            () => this.cancelOrCommenceEdit()
        );
    }

    private editOrSaveIsDisabled = (): boolean =>
        this.state.editing && this.state.selectedRoom.title === this.state.newRoomTitle

    private cancelOrCommenceEdit = (): void => {
        if (this.state.editing) {
            this.setState({ newRoomTitle: this.state.selectedRoom.title });
        }
        this.setState({ editing: !this.state.editing });
    }

    private deleteRoom = () => {
        deleteEntity(
            'Room',
            (room: RoomModel) => {
                this.props.deleteRoom(room);
                this.props.fetchRooms();
            },
            () => this.state.selectedRoom
        );
    }

    private selectRoom = (room: RoomModel): void => {
        this.props.selectRoom(room);
    }
}

const mapStateToProps = (state: AppState): RoomStateProps => {
    return ({
        rooms: state.room.rooms,
        editing: state.room.editing,
        selectedRoom: state.room.selectedRoom,
        isNewMode: state.room.isNewMode
    });
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): RoomDispatchProps => ({
    deleteRoom: (room: RoomModel) => dispatch(deleteRoom(room)),
    fetchRooms: () => dispatch(fetchRooms()),
    selectRoom: (room: RoomModel) => dispatch(selectRoom(room)),
    saveRoom: (id: number, newName: string, isNewMode: boolean) => dispatch(updateRoomName(id, newName, isNewMode))
});

export default connect<RoomStateProps, RoomDispatchProps, {}, AppState>(
    mapStateToProps,
    mapDispatchToProps
)(Room);