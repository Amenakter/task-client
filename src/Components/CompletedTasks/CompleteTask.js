import React from 'react';

const CompleteTask = (props) => {
    const { task } = props.CompleteTaskData
    return (
        <div class="card w-80 bg-base-100 shadow-xl m-4 border">
            <div class="card-body">
                <h2 class="card-title flex justify-between">
                    {<div>
                        <div class="form-control">
                            <label class="cursor-pointer label">
                                <input type="checkbox"
                                    checked="checked"
                                    class="checkbox checkbox-secondary mx-2" />
                                <span class="label-text text-xl">{task}</span>
                            </label>
                        </div>
                    </div>}
                </h2>
            </div>
        </div>
    );
};

export default CompleteTask;