<template>
    <div class="wxm-goods-info">
        <van-sticky :offset-top="0">
            <van-nav-bar left-text="返回" left-arrow safe-area-inset-top @click-left="handleClickLeft">
                <template #right>
                    <van-space>
                        <van-icon name="like-o" size="18" @click.stop="handleLike" />
                        <van-icon name="share-o" size="18" @click.stop="handleShowShare" />
                    </van-space>
                </template>
            </van-nav-bar>
        </van-sticky>

        <van-swipe class="goods-info-swipe">
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" style="width:100%;height: 300px;" />
            </van-swipe-item>
            <template #indicator="{ active, total }">
                <div class="wxm-indicator">{{ active + 1 }}/{{ total }}</div>
            </template>
        </van-swipe>

        <div class="goods-detail">
            <div class="sail-info wxm-background">
                <div class="price">
                    <div class="left">
                        <div class="present-price">
                            <span>￥</span>
                            <span>99.99</span>
                        </div>
                        <div class="original-price">
                            <span>￥</span>
                            <span>129.09</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="title">
                            <span>限时秒杀</span>
                            <span>距结束</span>
                        </div>
                        <div class="content">
                            <van-count-down :time="time">
                                <template #default="timeData">
                                    <span class="block">{{ timeData.days }}</span>
                                    <span class="colon">天</span>
                                    <span class="block">{{ timeData.hours }}</span>
                                    <span class="colon">时</span>
                                    <span class="block">{{ timeData.minutes }}</span>
                                    <span class="colon">分</span>
                                    <span class="block">{{ timeData.seconds }}</span>
                                    <span class="colon">秒</span>
                                </template>
                            </van-count-down>

                        </div>
                    </div>
                </div>
                <div class="goods-brief">
                    <span>旺旺碎冰冰整箱装果味饮料</span>
                    <span>78ml*8支*10</span>
                </div>
            </div>
            <div class="discounts-box wxm-background">
                <div class="vouchers">
                    <div class="left">
                        <div class="title">领券</div>
                        <div class="vouchers discount__content">
                            <div class="vouchers-title">券</div>
                            <div class="vouchers-content">15元现金券</div>
                        </div>
                        <div class="vouchers discount__content2">
                            <div class="vouchers-title">券</div>
                            <div class="vouchers-content">满199减20</div>
                        </div>
                        <div class="vouchers discount__content2">
                            <div class="vouchers-title">券</div>
                            <div class="vouchers-content">满119减10</div>
                        </div>
                    </div>
                    <div class="right"><van-icon name="arrow" /></div>
                </div>
                <div class="present">
                    <div class="left">
                        <div class="title">赠品</div>
                        <div>每满3件赠送一条毛巾</div>
                    </div>
                    <div class="right"><van-icon name="arrow" /></div>
                </div>
                <div class="promotion">
                    <div class="left">
                        <div class="title">促销</div>
                        <div class="discount__content">满30元换购</div>
                        <div class="detail">满30元可优惠换购促销商品</div>
                    </div>
                    <div class="right"><van-icon name="arrow" /></div>
                </div>
                <div class="delivery">
                    <div class="left">
                        <div class="title">配送</div>
                        <div class="discount__content">同城直达</div>
                        <div class="discount__content">顺丰</div>
                        <div class="detail">预计48小时内配送</div>
                    </div>
                    <div class="right"><van-icon name="arrow" /></div>
                </div>
            </div>
            <div class="specification wxm-background">

                <div>
                    <div class="title">产地</div>
                    <div class="content">见包装</div>
                </div>
                <div class="dividing-line">
                    <div class="title"></div>
                    <div class="content"></div>
                </div>
                <div>
                    <div class="title">规格</div>
                    <div class="content">20ml*20</div>
                </div>
                <div class="dividing-line">
                    <div class="title"></div>
                    <div class="content"></div>
                </div>
                <div>
                    <div class="title">存储方式</div>
                    <div class="content">常温</div>
                </div>
            </div>
        </div>
        <div class="space"></div>
        <div class="evaluation wxm-background">
            <div class="title">
                <div class="left">
                    <span>商品评价</span>
                    <span>(<span>9999</span>)</span>
                </div>
                <div class="right">
                    <span>好评率</span>
                    <span>99%</span>
                    <span><van-icon name="arrow" /></span>
                </div>
            </div>
            <div class="content">
                <div class="praise-tag">值得回购</div>
                <div class="praise-tag">品质保障</div>
                <div class="praise-tag">包装完整</div>
                <div class="praise-tag">新鲜</div>
                <div class="bad-tag">配送延迟</div>
            </div>
        </div>

         
        <div class="graphic-details">
            <div class="title">图·文·详·情</div>
            <div class="content">
                <img v-for="(image,index) in imagesDetailList" :key="index" :src="image" style="width:100%;height: 300px;" />
            </div>
        </div>

        <div class="notice  wxm-background">
            <div class="price-description">
                <div class="title">价格说明</div>
                <div class="content">
                    <span>展示价格：</span>
                    <span>指商品的实时价格，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化最终以订单结算页面价格为准。</span>
                </div>
            </div>
            <div class="purchase-instructions">
                <div class="title">购买必读</div>
                <div class="content">
                    <span>1.</span>
                    <span>商品以实物为准，图片仅供参考商品以实物为准，图片仅供参考商品以实物为准，图片仅供参考商品以实物为准，图片仅供参考商品以实物为准，图片仅供参考商品以实物为准，图片仅供参考商品以实物为准，图片仅供参考</span>
                </div>
                <div class="content">
                    <span>2.</span>
                    <span>商品以实物为准，图片仅供参考 </span>
                </div>
                <div class="content">
                    <span>3.</span>
                    <span>指商品的实时价格，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化最终以订单结算页面价格为准。</span>
                </div>
            </div>
        </div>

        <van-action-bar placeholder>
            <van-action-bar-icon icon="chat-o" text="客服" dot />
            <van-action-bar-icon icon="cart-o" text="购物车" badge="5" />
            <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
            <van-action-bar-button type="warning" text="加入购物车" />
            <van-action-bar-button type="danger" text="立即购买" />
        </van-action-bar>


        <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" />
    </div>
</template>

<script lang="ts" setup>
import { init } from '../ts/GoodsInfoView'
const {
    images, showShare, options, time,imagesDetailList,
    handleShowShare, handleLike,handleClickLeft
} = init()
</script>


<style scoped lang="scss">
@import '../css/GoodsInfoView.scss';
</style>