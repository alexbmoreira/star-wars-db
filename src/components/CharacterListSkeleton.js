import { Component } from "react";

class CharacterListSkeleton extends Component {
    render() {
        return (
            <div className="flex my-2 justify-between animate-pulse">
                <div className="flex flex-col w-1/4 space-y-2">
                    <div className="h-6 bg-gray-800 rounded w-full"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                </div>
                <div className="flex flex-col w-1/6 space-y-2 items-end">
                    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                </div>
            </div>
        );
    }
}
  
export default CharacterListSkeleton;
  