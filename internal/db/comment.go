package db

import (
	"context"
	"github.com/Godvictory/douyin/internal/model"
	"time"
)

func CommentPush(uid, vid int64, content string) (*model.Comment, error) {
	data := model.Comment{UserID: uid, VideoID: vid, Content: content}
	err := db.Create(&data).Error
	if err != nil {
		return nil, err
	}
	go func() {
		ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
		defer cancel()
		key := getVideoCommentCountKey(vid)
		rdb.Incr(ctx, key)
	}()
	return &data, nil
}

func CommentDel(cid int64) error {
	return db.Delete(&model.Comment{}, cid).Error
}

func CommentGet(vid int64) ([]*model.Comment, error) {
	var data []*model.Comment
	err := db.Preload("User").Where("video_id = ?", vid).Find(&data).Error
	if err != nil {
		return nil, err
	}
	return data, nil
}